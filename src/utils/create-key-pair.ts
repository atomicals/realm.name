/* eslint-disable prettier/prettier */
var Buffer = require('buffer').Buffer;
window['Buffer'] = window['Buffer'] || Buffer;
window['bitcoin'] = window['bitcoin'] || {};
// eslint-disable-next-line import/first
import * as ecc from '@bitcoin-js/tiny-secp256k1-asmjs';
// eslint-disable-next-line import/first
window['bitcoin'].initEccLib(ecc);
var bitcoin = window['bitcoin'];
// eslint-disable-next-line import/first
import { createMnemonicPhrase } from './create-mnemonic-phrase';
// eslint-disable-next-line import/first
import BIP32Factory from 'bip32';
const bip32 = BIP32Factory(ecc);
const bip39 = require('bip39');

export const toXOnly = publicKey => {
    return publicKey.slice(1, 33);
};

export interface CreateKeyPairInterface {
    address: string;
    publicKey: string;
    publicKeyXOnly: string;
    path: string;
    WIF: string;
    privateKey: string;
    // tweakedChildNode: string;
};

export const createKeyPair = async (
    phrase: string = '',
    path = `m/44'/0'/0'/0/0`,
): Promise<CreateKeyPairInterface> => {
    if (!phrase || phrase === '') {
        const phraseResult = createMnemonicPhrase();
        phrase = phraseResult.phrase;
    }
    const seed = await bip39.mnemonicToSeed(phrase);
    const rootKey = await bip32.fromSeed(seed);
    const childNodePrimary = rootKey.derivePath(path);
    const childNodeXOnlyPubkeyPrimary = toXOnly(childNodePrimary.publicKey);
    const p2trPrimary = bitcoin.payments.p2tr({
        internalPubkey: childNodeXOnlyPubkeyPrimary,
    });
    if (!p2trPrimary.address || !p2trPrimary.output || !childNodePrimary) {
        throw new Error('error creating p2tr');
    }
    // Used for signing, since the output and address are using a tweaked key
    // We must tweak the signer in the same way.
    //const tweakedChildNodePrimary = childNodePrimary.tweak(
    //    bitcoin.crypto.taggedHash('TapTweak', childNodeXOnlyPubkeyPrimary),
    //);
    if (!childNodePrimary.privateKey) {
        throw new Error('Error no privateKey');
    }

    return {
        address: p2trPrimary.address,
        publicKey: childNodePrimary.publicKey.toString('hex'),
        publicKeyXOnly: childNodeXOnlyPubkeyPrimary.toString('hex'),
        path,
        WIF: childNodePrimary.toWIF(),
        privateKey: childNodePrimary.privateKey?.toString('hex'),
       // tweakedChildNode: tweakedChildNodePrimary.toString('hex'),
    };
};

export const createPrimaryAndFundingKeyPairs = async () => {
    const phraseResult = await createMnemonicPhrase();
    return {
        phrase: phraseResult.phrase,
        primary: await createKeyPair(phraseResult.phrase, `m/44'/0'/0'/0/0`),
        funding: await createKeyPair(phraseResult.phrase, `m/44'/0'/0'/1/0`),
    };
};

export const createNKeyPairs = async (phrase, n = 1) => {
    const keypairs: any = [];
    for (let i = 0; i < n; i++) {
        keypairs.push(await createKeyPair(phrase, `m/44'/0'/0'/0/${i}`));
    }
    return {
        phrase,
        keypairs,
    };
};

export const getP2TRAddressFromPublicKey = (publicKey: any): string  => {
    const p2tr = bitcoin.payments.p2tr({
        internalPubkey: toXOnly(Buffer.from(publicKey, 'hex'))
      });
    return p2tr.address;
}
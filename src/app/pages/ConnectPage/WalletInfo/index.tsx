import * as React from 'react';
import styled from 'styled-components/macro';
import { A } from 'app/components/A';
import { ButtonPrimaryNew } from 'app/components/ButtonPrimaryNew';

interface Props {
  primaryAddress: any;
  fundingAddress: any;
  onDisconnect: any;
}

export function WalletInfo({ fundingAddress, primaryAddress, onDisconnect }: Props) {
  return (
    <Wrapper>
      <h1>Wallet Information</h1>
      <Divider />
      <FieldLabel>Primary Address:</FieldLabel>
      <FieldItem>
        <A href={`https://mempool.space/address/${primaryAddress}`} target="_blank">
          {primaryAddress}
        </A>
      </FieldItem>
      <FieldLabel>Funding Address:</FieldLabel>
      <FieldItem>
        <A href={`https://mempool.space/address/${fundingAddress}`} target="_blank">
          {fundingAddress}
        </A>
      </FieldItem>
      <MaxDisconnectButton>
        <ButtonPrimaryNew block={false} onClick={() => onDisconnect()}>
          Disconnect Wallet
        </ButtonPrimaryNew>
      </MaxDisconnectButton>
    </Wrapper>
  );
}
const MaxDisconnectButton = styled.div`
  max-width: 200px;
`;
const Divider = styled.div`
  color: ${p => p.theme.text};
  border-top: solid 1px #484848;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const FieldItem = styled.p`
  color: ${p => p.theme.text};
  margin-bottom: 10px;
`;

const FieldLabel = styled.div`
  color: ${p => p.theme.textSecondary};
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  font-weight: 500;
  color: ${p => p.theme.text};
`;

import { ElectrumApiMock } from 'services/electrum-api-mock';

export const getMockApi = (notFound: boolean = false): any => {
  const setState = {
    global: {},
    result: {
      atomical_id: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
      atomical_number: 5885,
      atomical_ref: 'f00dj2pzsscexwm425fzn09x218n7vaaenzh63bprm16kq4w6k6gi0',
      type: 'NFT',
      confirmed: true,
      mint_info: {
        commit_txid: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cd',
        commit_index: 0,
        commit_location: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
        commit_tx_num: 901395984,
        commit_height: 809890,
        reveal_location_txid: '8ba60a403cfe891cec00ba9879628be9f51e969c920609f5924ec95ef876965f',
        reveal_location_index: 0,
        reveal_location: '8ba60a403cfe891cec00ba9879628be9f51e969c920609f5924ec95ef876965fi0',
        reveal_location_tx_num: 901395985,
        reveal_location_height: 809890,
        reveal_location_header:
          '00a0332bcf1596af22b0ac8e386009b807b75a2f474b0e007e9501000000000000000000e6cd3548906cf974be7494484cf98b790c451c91eda6c1fb147697db9edd7b9e33ec16657fed04171fb010bb',
        reveal_location_blockhash:
          '18e2a02bd76aa2e142014b2867baa7a0f5722337161401000000000000000000',
        reveal_location_scripthash:
          '34801e5e6a8c09c72bcb951acd05dd9a7a943d838e665683e6a3cc2f4243bd20',
        reveal_location_script:
          '51201f00bfa5828284c6fc16b80ceea38e30c4aa1a6b8802cfed443b6034eebb19cc',
        reveal_location_value: 1000,
        args: {
          request_realm: 'hal',
          bitworkc: '7800',
          nonce: 4769076,
          time: 1696000936,
        },
        meta: {},
        ctx: {},
        $request_realm: 'hal',
        $bitwork: {
          bitworkc: '7800',
          bitworkr: null,
        },
        reveal_location_address: 'bc1pruqtlfvzs2zvdlqkhqxwaguwxrz25xnt3qpvlm2y8dsrfm4mr8xq7t85dg',
        blockheader_info: {
          version: 724803584,
          prevHash: '00000000000000000001957e000e4b472f5ab707b80960388eacb022af9615cf',
          merkleRoot: '9e7bdd9edb977614fbc1a6ed911c450c798bf94c489474be74f96c904835cde6',
          timestamp: 1696001075,
          bits: 386198911,
          nonce: 3138433055,
        },
      },
      $relns: {},
      $bitwork: {
        bitworkc: '7800',
        bitworkr: null,
      },
      $realm_candidates: [
        {
          tx_num: 901395984,
          atomical_id: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
          txid: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cd',
          commit_height: 809890,
          reveal_location_height: 809890,
        },
      ],
      $request_realm_status: {
        status: 'verified',
        verified_atomical_id: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
        note: 'Successfully verified and claimed realm for current Atomical',
      },
      $request_realm: 'hal',
      subtype: 'realm',
      $realm: 'hal',
      $full_realm_name: 'hal',
      mint_data: {
        fields: {
          args: {
            request_realm: 'hal',
            bitworkc: '7800',
            nonce: 4769076,
            time: 1696000936,
          },
        },
      },
      location_info: [
        {
          location: '8ba60a403cfe891cec00ba9879628be9f51e969c920609f5924ec95ef876965fi0',
          txid: '8ba60a403cfe891cec00ba9879628be9f51e969c920609f5924ec95ef876965f',
          index: 0,
          scripthash: '34801e5e6a8c09c72bcb951acd05dd9a7a943d838e665683e6a3cc2f4243bd20',
          value: 1000,
          script: '51201f00bfa5828284c6fc16b80ceea38e30c4aa1a6b8802cfed443b6034eebb19cc',
          atomicals_at_location: [
            '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
          ],
          tx_num: 901395985,
          address: 'bc1pruqtlfvzs2zvdlqkhqxwaguwxrz25xnt3qpvlm2y8dsrfm4mr8xq7t85dg',
        },
      ],
      location_info_obj: {
        locations: [
          {
            location: '8ba60a403cfe891cec00ba9879628be9f51e969c920609f5924ec95ef876965fi0',
            txid: '8ba60a403cfe891cec00ba9879628be9f51e969c920609f5924ec95ef876965f',
            index: 0,
            scripthash: '34801e5e6a8c09c72bcb951acd05dd9a7a943d838e665683e6a3cc2f4243bd20',
            value: 1000,
            script: '51201f00bfa5828284c6fc16b80ceea38e30c4aa1a6b8802cfed443b6034eebb19cc',
            atomicals_at_location: [
              '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
            ],
            tx_num: 901395985,
            address: 'bc1pruqtlfvzs2zvdlqkhqxwaguwxrz25xnt3qpvlm2y8dsrfm4mr8xq7t85dg',
          },
        ],
      },
      location_info_count: 1,
    },
  };

  const client = new ElectrumApiMock();
  client.setAtomicalsGetLocationCallback(() => {
    return setState;
  });

  client.setGetRealmInfoCallback((realm: string) => {
    if (realm === 'notfound') {
      return {
        result: {
          atomical_id: null,
          top_level_realm_atomical_id: null,
          top_level_realm_name: null,
          nearest_parent_realm_atomical_id: null,
          nearest_parent_realm_name: null,
          request_full_realm_name: 'hal',
          found_full_realm_name: null,
          missing_name_parts: 'hal',
          candidates: []
        },
      };
    } else {
      return {
        result: {
          atomical_id: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
          top_level_realm_atomical_id:
            '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
          top_level_realm_name: 'hal',
          nearest_parent_realm_atomical_id:
            '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
          nearest_parent_realm_name: 'hal',
          request_full_realm_name: 'hal',
          found_full_realm_name: 'hal',
          missing_name_parts: null,
          candidates: [
            {
              tx_num: 901395984,
              atomical_id: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
              txid: '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cd',
              commit_height: 809890,
              reveal_location_height: 809890,
            },
          ],
          nearest_parent_realm_subrealm_mint_rules: {
            nearest_parent_realm_atomical_id:
              '7800d90adfce58eef284115ffa813d105153ed4a757f130d76c50269dc9c34cdi0',
            note: "Updated rules become effective only after 3 block confirmations. The 'upcoming_rules' map key indicates the anticipated height the rule update become effective.",
            current_height: 809934,
            current_height_rules: null,
            next_height: 809935,
            next_height_rules: null,
            next_2_height: 809936,
            next_2_height_rules: null,
            next_3_height: 809937,
            next_3_height_rules: null,
          },
          nearest_parent_realm_subrealm_mint_allowed: false,
        },
      };
    }
  });

  return client;
};

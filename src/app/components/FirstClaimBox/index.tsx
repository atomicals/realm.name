import * as React from 'react';
import styled from 'styled-components/macro';
import { A } from 'app/components/A';
import { FormLabel } from 'app/components/FormLabel';
import { ButtonPrimaryNew } from '../ButtonPrimaryNew';
import { useNavigate } from 'react-router-dom';
import { NftMinter } from '../NftMinter';

interface Props {
  primaryAddress: any;
  name: string;
}

export function FirstClaimBox({ primaryAddress, name }: Props) {
  const navigate = useNavigate();
  const [isOpenMinter, setOpenMinter] = React.useState(false);
  function gotoConnect() {
    navigate('/_wallet');
  }

  function isLoggedIn() {
    return primaryAddress;
  }

  function openMinter(evt) {
    setOpenMinter(!isOpenMinter);
    evt.preventDefault();
  }

  return (
    <Wrapper>
      <FormGroupClaim className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <LeadClaim className="lead">
          Great news!
          <br />
          Realm <Highlight>+{name}</Highlight> is still available to claim!
        </LeadClaim>
        <LeadClaim className="text-center"></LeadClaim>
        {!isLoggedIn() && (
          <Lead>
            Connect your wallet and be the first to claim the Realm before someone else takes it.
          </Lead>
        )}

        {isOpenMinter && <NftMinter />}
        {!isOpenMinter && (
          <>
            {!isLoggedIn() && (
              <ButtonPrimaryNew block={false} onClick={gotoConnect}>
                Connect Wallet
              </ButtonPrimaryNew>
            )}
            {isLoggedIn() && (
              <ButtonPrimaryNew block={false} onClick={openMinter}>
                Mint Realm
              </ButtonPrimaryNew>
            )}
            <div className="text-center my-3">
              <A href="https://docs.atomicals.xyz/realm-names" target="_blank">
                ...or claim Realm with the CLI instead
              </A>
            </div>
          </>
        )}
      </FormGroupClaim>
    </Wrapper>
  );
}

const Highlight = styled.span`
  color: #ff914d;
`;

const LeadClaim = styled.p`
  color: ${p => p.theme.text};
  font-weight: bold;
`;

const ProfileField = styled.div`
  display: flex;

  align-items: center;
`;
const ProfileFieldInner = styled.div``;

const Divider = styled.div`
  color: ${p => p.theme.text};
  border-top: solid 1px #484848;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Lead = styled.p`
  color: ${p => p.theme.text};
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

const Name = styled.div`
  flex: 1;
  padding: 0.625rem 0;
`;

const Info = styled.div`
  display: flex;
`;

const StarCount = styled.div`
  display: flex;
  align-items: center;
  min-width: 6rem;
  .icon {
    margin-right: 0.125rem;
  }
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-color: rgb(60, 16, 105) !important;
  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
  background-color: #101010 !important;
`;

const FormGroupClaim = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-color: none;
  border: none !important;
  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
  background-color: #101010 !important;
`;

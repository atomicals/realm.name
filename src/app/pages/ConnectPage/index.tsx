import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ConnectView } from 'app/components/ConnectView';
import { useAppGlobalStateSlice } from 'app/slice';
import styled from 'styled-components/macro';
import { selectFundingAddress, selectPrimaryAddress } from 'app/slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { WalletInfo } from './WalletInfo';
import { NavBarNew } from 'app/components/NavBarNew';

export function ConnectPage() {
  const globalSlice = useAppGlobalStateSlice();
  const primaryAddress = useSelector(selectPrimaryAddress);
  const fundingAddress = useSelector(selectFundingAddress);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(globalSlice.actions.clearSession());
  }

  function isLoggedIn() {
    return primaryAddress;
  }

  return (
    <>
      <Helmet>
        <title>+Realm Names</title>
        <meta name="description" content="Realm name system powered by" />
      </Helmet>
      <NavBarNew />
      <Container className="container mt-5 pt-5">
        <div className="row">
          <div className="col">
            {!isLoggedIn() && <ConnectView />}
            {isLoggedIn() && (
              <>
                <WalletInfo
                  primaryAddress={primaryAddress}
                  fundingAddress={fundingAddress}
                  onDisconnect={onLogout}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div``;

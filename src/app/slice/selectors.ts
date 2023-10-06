import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.appGlobalState || initialState;

export const selectSha256dFromPassword = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.sha256d
);

export const selectEncryptedPhrase = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.encryptedPhrase
);

export const selectEncryptedPrimaryKey = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.encryptedPrimaryKey
);

export const selectEncryptedFundingKey = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.encryptedFundingKey
);

export const selectPrimaryAddress = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.primaryAddress
);

export const selectFundingAddress = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.fundingAddress
);

export const selectPrimaryPublicKey = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.primaryPublicKey
);

export const selectFundingPublicKey = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.fundingPublicKey
);

export const selectSha256d = createSelector(
  [selectDomain],
  appGlobalState => appGlobalState.sha256d
);

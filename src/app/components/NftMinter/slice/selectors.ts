import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.nftMinterState || initialState;

export const selectName = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.name
);

export const selectLoading = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.loading
);

export const selectError = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.error
);
 
import { PayloadAction } from '@reduxjs/toolkit';
import { Repo } from 'types/Repo';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { claimViewSaga } from './saga';
import { ClaimViewState, ClaimViewErrorType } from './types';

export const initialState: ClaimViewState = {
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'claimViewState',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {},
    loadRealms(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    reposLoaded(state) {},
    repoError(state, action: PayloadAction<ClaimViewErrorType>) {},
    realmInfoLoaded(state, action: PayloadAction<Repo[]>) {},
  },
});

export const { actions: profileOverviewActions, reducer } = slice;

export const useRealmsViewSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: claimViewSaga });
  return { actions: slice.actions };
};

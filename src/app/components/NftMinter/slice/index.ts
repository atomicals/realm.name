import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { nftMinterSaga } from './saga';
import { NftMinterErrorType, NftMinterState } from './types';

export const initialState: NftMinterState = {
  name: '',
  nftType: 'realm',
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'nftMinterState',
  initialState,
  reducers: {
    repoError(state, action: PayloadAction<NftMinterErrorType>) {
      state.error = action.payload;
      state.loading = false;
    }
  },
});

export const { actions: nftMinterActions, reducer } = slice;

export const useNftMinterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: nftMinterSaga });
  return { actions: slice.actions };
};

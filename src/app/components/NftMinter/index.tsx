import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { selectName, selectLoading, selectError } from './slice/selectors';
import { NftMinterErrorType } from './slice/types';
import { useNftMinterSlice } from './slice';
import { useAppGlobalStateSlice } from 'app/slice';
import { selectPrimaryAddress } from 'app/slice/selectors';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PaymentCode } from './PaymentCode';

interface Props {}

export function NftMinter({}: Props) {
  const { actions } = useNftMinterSlice();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = useSelector(selectName);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const globalSlice = useAppGlobalStateSlice();
  const primaryAddress = useSelector(selectPrimaryAddress);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  }; 
  useEffectOnMount(() => {});

  return (
    <Wrapper>
      Realm minter {primaryAddress}
      <PaymentCode paymentAddress={primaryAddress as string} />
    </Wrapper>
  );
}

export const nftMinterErrorText = (error: NftMinterErrorType) => {
  switch (error) {
    case NftMinterErrorType.GENERAL_ERROR:
      return 'General error';
    default:
      return 'An error has occurred!';
  }
};

const Wrapper = styled.div`
  width: 100%;
`;

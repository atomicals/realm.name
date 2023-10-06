import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { TextButton } from './components/TextButton';
import { selectRealms } from './slice/selectors';
import { useRealmsViewSlice } from './slice';
import { FooterBasic } from 'app/components/FooterBasic';
import { selectPrimaryAddress } from 'app/slice/selectors';

export function RealmsView() {
  const { actions } = useRealmsViewSlice();
  const realms = useSelector(selectRealms);
  const primaryAddress = useSelector(selectPrimaryAddress);
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadRealms(primaryAddress as any));
  });

  return (
    <Wrapper>
      {JSON.stringify(realms)}
      <FooterBasic />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${TextButton} {
    margin: 16px 0;
    font-size: 0.875rem;
  }
`;

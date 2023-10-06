import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';

export function Masthead() {
  return (
    <Wrapper>
      <Title>Claim your +name on Bitcoin.</Title>
      <Lead>
        The Realm name system is the world's first practical alternative to domain names powered by
        Bitcoin and the{' '}
        <A href="https:/atomicals.xyz" target="_blank" rel="noopener noreferrer">
          Atomicals Protocol.
        </A>
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 220px;
`;

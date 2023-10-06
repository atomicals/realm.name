import * as React from 'react';
import styled from 'styled-components/macro';
 
interface Props {
  children: any;
}

export function NotFoundInfo({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  font-weight: 500;
  color: ${p => p.theme.text};
`; 
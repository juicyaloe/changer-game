import { ReactNode } from 'react';
import styled from '@emotion/styled';

const ContainerWrap = styled.div`
  margin: 0 auto;
  width: 95%;

  @media screen and (min-width: 769px) {
    width: 80%;
    max-width: 1400px;
  }
`;

interface ContainerType {
  children: ReactNode;
}

export default function Container({ children }: ContainerType) {
  return <ContainerWrap>{children}</ContainerWrap>;
}

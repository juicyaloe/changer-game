import { ReactNode } from "react";
import Container from "../layout/container";
import Header from "../layout/header";
import MenuBar from "../layout/menuBar";

import styled from "@emotion/styled";

const Indicator = styled.div`
  padding-top: 10px;

  font-size: 1rem;
  font-weight: bold;

  margin-left: 10px;
`;

interface MenuStructureType {
  children: ReactNode;
}

export default function MenuStructure({ children }: MenuStructureType) {
  return (
    <Container>
      <Header />
      <MenuBar />
      <Indicator>아래 버튼을 눌려 이동해주세요.</Indicator>
      {children}
    </Container>
  );
}

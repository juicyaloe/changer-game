import { ReactNode } from "react";
import Container from "../layout/container";
import Header from "../layout/header";
import MenuBar from "../layout/menuBar";

interface BasicStructureType {
  children: ReactNode;
}

export default function BasicStructure({ children }: BasicStructureType) {
  return (
    <Container>
      <Header />
      <MenuBar />
      {children}
    </Container>
  );
}

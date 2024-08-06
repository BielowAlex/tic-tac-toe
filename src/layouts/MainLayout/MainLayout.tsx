import React from "react";
import { Header } from "../../components";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  padding: 20px;
  gap: 40px;
`;

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export { MainLayout };

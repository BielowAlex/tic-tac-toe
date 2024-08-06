import React from "react";
import { LogoStyled } from "./Logo.styled.ts";

const Logo: React.FC = () => {
  return (
    <LogoStyled>
      <img src="/public/images/logo.webp" alt="logo" width={50} height={50} />
      <h2>Tic-Tac-Toe</h2>
    </LogoStyled>
  );
};

export { Logo };

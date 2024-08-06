import React from "react";
import { HeaderStyled } from "./Header.styled.ts";
import { Logo } from "../Logo";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  );
};

export { Header };

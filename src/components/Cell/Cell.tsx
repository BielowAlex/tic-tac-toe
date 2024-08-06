import React, { ReactNode } from "react";
import { CellStyled } from "./Cell.styled.ts";

interface IProps {
  children: ReactNode;
  handleClick: () => void;
}

const Cell: React.FC<IProps> = ({ children, handleClick }) => {
  return <CellStyled onClick={handleClick}>{children}</CellStyled>;
};

export { Cell };

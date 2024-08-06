import React, { ReactNode } from "react";
import { CellStyled } from "./Cell.styled.ts";

interface IProps {
  children: ReactNode;
  handleClick: () => void;
  isWinCell: boolean;
}

const Cell: React.FC<IProps> = ({ children, handleClick, isWinCell }) => {
  return (
    <CellStyled $isSelected={isWinCell} onClick={handleClick}>
      {children}
    </CellStyled>
  );
};

export { Cell };

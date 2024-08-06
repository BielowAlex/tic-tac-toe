import React from "react";
import { Cell } from "../Cell";
import { Player } from "../../types";
import { BoardStyled } from "./Board.styled.ts";

interface IProps {
  status: string;
  board: (Player | null)[];
  handleClick: (arg: number) => void;
}

const Board: React.FC<IProps> = ({ status, board, handleClick }) => {
  return (
    <BoardStyled $disabled={status !== "playing"}>
      {board.map((cell, index) => (
        <Cell key={index} handleClick={() => handleClick(index)}>
          {cell}
        </Cell>
      ))}
    </BoardStyled>
  );
};

export { Board };

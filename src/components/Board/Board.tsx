import React from "react";
import { Cell } from "../Cell";
import { Player } from "../../types";
import { BoardStyled } from "./Board.styled.ts";

interface IProps {
  status: string;
  board: (Player | null)[];
  handleClick: (arg: number) => void;
  pattern: number[];
}

const Board: React.FC<IProps> = ({ status, board, handleClick, pattern }) => {
  return (
    <BoardStyled $disabled={status === "idle"}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          handleClick={() => handleClick(index)}
          isWinCell={pattern.includes(index)}
        >
          {cell}
        </Cell>
      ))}
    </BoardStyled>
  );
};

export { Board };

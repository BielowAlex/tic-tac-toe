import React from "react";
import { BoardStyled } from "./Board.styled.ts";
import { Cell } from "../Cell";
import { useMachine } from "@xstate/react";
import { ticTacToeMachine } from "../../machines";
import { Container } from "../../layouts";
import { Status } from "../Status";
import { BoardPanel } from "../BoardPanel";

const Board: React.FC = () => {
  const [state, send] = useMachine(ticTacToeMachine);
  const { board, player, winner, pattern } = state.context;
  const status: string = state.value as string;

  const handleStart = () => {
    send({ type: "START" });
  };

  const handleReset = () => {
    send({ type: "RESET" });
  };

  const handleClick = (index: number) => {
    if (board[index] === null && state.matches("playing")) {
      send({ type: "MAKE_MOVE", index });
    }
  };
  return (
    <Container>
      <Status status={status} player={player} winner={winner as string} />
      <BoardStyled $disabled={status !== "playing"}>
        {board.map((cell, index) => (
          <Cell key={index} handleClick={() => handleClick(index)}>
            {cell}
          </Cell>
        ))}
      </BoardStyled>
      <BoardPanel
        status={status}
        handleStart={handleStart}
        handleReset={handleReset}
      />
    </Container>
  );
};

export { Board };

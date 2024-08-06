import React from "react";
import { ContainerStyled } from "./Container.styled.ts";
import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines";
import { Status } from "../Status";
import { BoardPanel } from "../BoardPanel";
import { Board } from "../Board";

const Container: React.FC = () => {
  const [state, send] = useMachine(gameMachine);
  const { board, player, winner } = state.context;
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
    <ContainerStyled>
      <Status status={status} player={player} winner={winner as string} />
      <Board board={board} status={status} handleClick={handleClick} />
      <BoardPanel
        status={status}
        handleStart={handleStart}
        handleReset={handleReset}
      />
    </ContainerStyled>
  );
};

export { Container };

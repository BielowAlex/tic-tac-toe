import React from "react";
import { ContainerStyled } from "./Container.styled.ts";
import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines";
import { Status } from "../Status";
import { BoardPanel } from "../BoardPanel";
import { Board } from "../Board";

// Container component that connects to the XState machine and handles game logic
const Container: React.FC = () => {
  // Hook into the XState machine
  const [state, send] = useMachine(gameMachine);

  // Destructure necessary values from the state context
  const { board, player, winner, pattern } = state.context;
  // Cast the state value to a string to determine the current game status
  const status: string = state.value as string;

  // Handler function to start the game
  const handleStart = () => {
    send({ type: "START" });
  };

  // Handler function to reset the game
  const handleReset = () => {
    send({ type: "RESET" });
  };

  // Handler function to handle cell clicks on the board
  const handleClick = (index: number) => {
    // Only allow moves if the cell is empty and the game is currently in the "playing" state
    if (board[index] === null && state.matches("playing")) {
      send({ type: "MAKE_MOVE", index });
    }
  };

  return (
    <ContainerStyled>
      {/* Render the status of the game, including the current player and winner */}
      <Status status={status} player={player} winner={winner as string} />
      {/* Render the game board, passing in the current board state, status, and click handler */}
      <Board
        pattern={pattern} // Pass the winning pattern for highlighting
        board={board}
        status={status}
        handleClick={handleClick}
      />
      {/* Render the board panel with start and reset buttons */}
      <BoardPanel
        status={status}
        handleStart={handleStart}
        handleReset={handleReset}
      />
    </ContainerStyled>
  );
};

export { Container };

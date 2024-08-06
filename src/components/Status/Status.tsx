import React from "react";
import { StatusMessageStyled, StatusStyled } from "./Status.styled.ts";
import { faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define the props expected by the Status component
interface IProps {
  status: string; // Current status of the game (e.g., idle, won, draw, playing)
  player: string; // Current player ('X' or 'O')
  winner: string; // Winner of the game ('X' or 'O') or an empty string if no winner
}

// Functional component to display the status of the game
const Status: React.FC<IProps> = ({ status, player, winner }) => {
  return (
    <StatusStyled>
      {/* Display a message prompting the user to press the play button when the game is idle */}
      {status === "idle" && (
        <StatusMessageStyled>
          <span>Press the play button</span>
        </StatusMessageStyled>
      )}

      {/* Display the winning message when a player wins */}
      {status === "won" && (
        <StatusMessageStyled>
          <FontAwesomeIcon icon={faTrophy} />
          <span>Player {winner} won!</span>
        </StatusMessageStyled>
      )}

      {/* Display a draw message when the game ends in a draw */}
      {status === "draw" && (
        <StatusMessageStyled>
          <FontAwesomeIcon icon={faHandshake} />
          <span>Draw!</span>
        </StatusMessageStyled>
      )}

      {/* Display the current player who needs to make a move when the game is in progress */}
      {status === "playing" && (
        <StatusMessageStyled>
          <span>Move player {player}</span>
        </StatusMessageStyled>
      )}
    </StatusStyled>
  );
};

export { Status };

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
      {/* Display a message prompting the user to start the game when idle */}
      {status === "idle" && (
        <StatusMessageStyled>
          <span>Click "Play" to begin the game</span>
        </StatusMessageStyled>
      )}

      {/* Display the winning message when a player wins */}
      {status === "won" && (
        <StatusMessageStyled>
          <FontAwesomeIcon icon={faTrophy} />
          <span>Congratulations! Player {winner} has won the game!</span>
        </StatusMessageStyled>
      )}

      {/* Display a draw message when the game ends in a draw */}
      {status === "draw" && (
        <StatusMessageStyled>
          <FontAwesomeIcon icon={faHandshake} />
          <span>The game is a draw. Better luck next time!</span>
        </StatusMessageStyled>
      )}

      {/* Display the current player who needs to make a move when the game is in progress */}
      {status === "playing" && (
        <StatusMessageStyled>
          <span>It's player {player}'s turn. Make your move!</span>
        </StatusMessageStyled>
      )}
    </StatusStyled>
  );
};

export { Status };

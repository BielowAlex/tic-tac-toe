import React from "react";
import { StatusMessageStyled, StatusStyled } from "./Status.styled.ts";
import { faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  status: string;
  player: string;
  winner: string;
}

const Status: React.FC<IProps> = ({ status, player, winner }) => {
  return (
    <StatusStyled>
      {status === "idle" && (
        <StatusMessageStyled>
          <span>Press the play button</span>
        </StatusMessageStyled>
      )}
      {status === "won" && (
        <StatusMessageStyled>
          <FontAwesomeIcon icon={faTrophy} />
          <span>Player {winner} won!</span>
        </StatusMessageStyled>
      )}
      {status === "draw" && (
        <StatusMessageStyled>
          <FontAwesomeIcon icon={faHandshake} />
          <span>Draw!</span>
        </StatusMessageStyled>
      )}
      {status === "playing" && (
        <StatusMessageStyled>
          <span>Move player {player}</span>
        </StatusMessageStyled>
      )}
    </StatusStyled>
  );
};

export { Status };

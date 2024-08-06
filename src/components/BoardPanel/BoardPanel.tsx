import React from "react";
import { BoardPanelStyled } from "./BoardPanel.styled.ts";
import { ButtonStyled } from "../Styles";

interface IProps {
  status: string;
  handleStart: () => void;
  handleReset: () => void;
}

const BoardPanel: React.FC<IProps> = ({ status, handleStart, handleReset }) => {
  const isStatusIdle = status === "idle";

  return (
    <BoardPanelStyled>
      {isStatusIdle ? (
        <ButtonStyled onClick={handleStart}>Play</ButtonStyled>
      ) : (
        status !== "playing" && (
          <ButtonStyled onClick={handleReset}>Play again</ButtonStyled>
        )
      )}
    </BoardPanelStyled>
  );
};

export { BoardPanel };

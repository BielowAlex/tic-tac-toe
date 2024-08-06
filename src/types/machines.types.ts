export type Player = "X" | "O";

export interface TicTacToeContext {
  board: (Player | null)[];
  player: Player;
  pattern: number[];
  winner: Player | null;
}

export type TicTacToeEvent =
  | { type: "START" }
  | { type: "MAKE_MOVE"; index: number }
  | { type: "RESET" }
  | { type: "AI_MOVE"; index: number };

export interface TicTacToeSchema {
  states: {
    idle: {};
    playing: {};
    pattern: {};
    won: {};
    draw: {};
  };
}

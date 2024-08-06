import { Player, TicTacToeContext, TicTacToeEvent } from "../../types";
import { assign, createMachine } from "xstate";

export interface IWinResult {
  status: boolean;
  pattern: number[];
}

const isWin = (board: (Player | null)[], player: Player): IWinResult => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const result: IWinResult = {
    status: false,
    pattern: [],
  };

  winPatterns.forEach((pattern) => {
    const status = pattern.every((index) => board[index] === player);

    if (status) {
      result.status = status;
      result.pattern = pattern;
    }
  });

  return result;
};

const isDraw = (board: (Player | null)[]): boolean => {
  return board.every((cell) => cell !== null);
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const gameMachine = createMachine<TicTacToeContext, TicTacToeEvent>(
  {
    id: "ticTacToe",
    initial: "idle",
    context: {
      board: Array(9).fill(null),
      player: "X",
      winner: null,
      pattern: [],
    },
    states: {
      idle: {
        on: {
          START: "playing",
        },
      },
      playing: {
        on: {
          MAKE_MOVE: [
            {
              target: "won",
              guard: "checkWin",
              actions: "updateBoard",
            },
            {
              target: "draw",
              guard: "checkDraw",
              actions: "updateBoard",
            },
            {
              target: "playing",
              actions: "updateBoard",
            },
          ],
          RESET: {
            target: "idle",
            actions: "resetBoard",
          },
        },
      },
      won: {
        on: {
          RESET: {
            target: "idle",
            actions: "resetBoard",
          },
        },
      },
      draw: {
        on: {
          RESET: {
            target: "idle",
            actions: "resetBoard",
          },
        },
      },
    },
  },
  {
    actions: {
      updateBoard: assign({
        board: ({ context, event }) => {
          if (event.type !== "MAKE_MOVE") return context.board;

          const newBoard = context.board.slice();
          newBoard[event.index] = context.player;

          return newBoard;
        },
        player: ({ context }) => (context.player === "X" ? "O" : "X"),
        winner: ({ context, event }) => {
          if (event.type !== "MAKE_MOVE") return context.winner;

          const newBoard = context.board.slice();
          newBoard[event.index] = context.player;

          const result = isWin(newBoard, context.player);

          return result.status ? context.player : null;
        },
        pattern: ({ context, event }) => {
          if (event.type !== "MAKE_MOVE") return context.pattern;

          const newBoard = context.board.slice();
          newBoard[event.index] = context.player;

          const result = isWin(newBoard, context.player);

          return result.status ? result.pattern : context.pattern;
        },
      }),
      resetBoard: assign(() => ({
        board: Array(9).fill(null),
        player: "X",
        winner: null,
        pattern: [],
      })),
    },
    guards: {
      checkWin: ({
        context,
        event,
      }: {
        context: TicTacToeContext;
        event: TicTacToeEvent;
      }) => {
        if (event.type !== "MAKE_MOVE") return false;

        const newBoard = context.board.slice();
        newBoard[event.index] = context.player;

        const result = isWin(newBoard, context.player);
        return result.status;
      },
      checkDraw: ({
        context,
        event,
      }: {
        context: TicTacToeContext;
        event: TicTacToeEvent;
      }) => {
        if (event.type !== "MAKE_MOVE") return false;

        const newBoard = context.board.slice();
        newBoard[event.index] = context.player;
        return isDraw(newBoard);
      },
    },
  },
);

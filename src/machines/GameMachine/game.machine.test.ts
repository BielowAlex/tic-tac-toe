import { createActor } from "xstate";
import { expect, test } from "vitest";
import { gameMachine } from "./game.machine.ts";

test('Should transition to "playing" and handle moves correctly', async () => {
  const actor = createActor(gameMachine);

  actor.start();
  actor.send({ type: "START" });

  actor.send({ type: "MAKE_MOVE", index: 0 });

  expect(actor.getSnapshot().context.board).toEqual([
    "X",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  expect(actor.getSnapshot().context.player).toBe("O");

  actor.send({ type: "MAKE_MOVE", index: 1 });

  expect(actor.getSnapshot().context.board).toEqual([
    "X",
    "O",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  expect(actor.getSnapshot().context.player).toBe("X");
});

test('Should detect a win and transition to "won" state', async () => {
  const actor = createActor(gameMachine);

  actor.start();
  actor.send({ type: "START" });

  actor.send({ type: "MAKE_MOVE", index: 0 });
  actor.send({ type: "MAKE_MOVE", index: 1 });
  actor.send({ type: "MAKE_MOVE", index: 3 });
  actor.send({ type: "MAKE_MOVE", index: 4 });
  actor.send({ type: "MAKE_MOVE", index: 6 });

  expect(actor.getSnapshot().value).toBe("won");
  expect(actor.getSnapshot().context.winner).toBe("X");
});

test('Should detect a draw and transition to "draw" state', async () => {
  const actor = createActor(gameMachine);

  actor.start();
  actor.send({ type: "START" });

  actor.send({ type: "MAKE_MOVE", index: 0 });
  actor.send({ type: "MAKE_MOVE", index: 1 });
  actor.send({ type: "MAKE_MOVE", index: 2 });
  actor.send({ type: "MAKE_MOVE", index: 4 });
  actor.send({ type: "MAKE_MOVE", index: 3 });
  actor.send({ type: "MAKE_MOVE", index: 5 });
  actor.send({ type: "MAKE_MOVE", index: 7 });
  actor.send({ type: "MAKE_MOVE", index: 6 });
  actor.send({ type: "MAKE_MOVE", index: 8 });

  console.log(actor.getSnapshot().value);

  expect(actor.getSnapshot().value).toBe("draw");
});

test("Should reset the game to idle state", async () => {
  const actor = createActor(gameMachine);

  actor.start();
  actor.send({ type: "START" });
  actor.send({ type: "MAKE_MOVE", index: 0 });

  actor.send({ type: "RESET" });

  expect(actor.getSnapshot().value).toBe("idle");
  expect(actor.getSnapshot().context.board).toEqual(Array(9).fill(null));
  expect(actor.getSnapshot().context.player).toBe("X");
  expect(actor.getSnapshot().context.winner).toBe(null);
});

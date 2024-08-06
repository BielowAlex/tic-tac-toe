import { fireEvent, render, screen } from "@testing-library/react";
import { BoardPanel } from "./BoardPanel.tsx";
import { vitest } from "vitest";

describe("BoardPanel Component", () => {
  test("Check idle status", () => {
    const fn = vitest.fn();

    render(<BoardPanel status={"idle"} handleReset={fn} handleStart={fn} />);

    expect(screen.getByText("Play")).toBeInTheDocument();
  });
  test("Play again", () => {
    const fn = vitest.fn();

    render(<BoardPanel status={"won"} handleReset={fn} handleStart={fn} />);

    expect(screen.getByText("Play again")).toBeInTheDocument();
  });
  test("Play button handler", () => {
    const play = vitest.fn();
    const reset = vitest.fn();

    render(
      <BoardPanel status={"idle"} handleReset={reset} handleStart={play} />,
    );

    const playButton = screen.getByText("Play");

    fireEvent.click(playButton);

    expect(play).toBeCalledTimes(1);
  });
  test("Reset button handler", () => {
    const play = vitest.fn();
    const reset = vitest.fn();

    render(
      <BoardPanel status={"won"} handleReset={reset} handleStart={play} />,
    );

    const resetButton = screen.getByText("Play again");

    fireEvent.click(resetButton);

    expect(reset).toBeCalledTimes(1);
  });
  test("Check playing status", () => {
    const play = vitest.fn();
    const reset = vitest.fn();

    render(
      <BoardPanel status={"playing"} handleReset={reset} handleStart={play} />,
    );

    const startButton = screen.queryByRole("button", { name: /Play/i });
    const resetButton = screen.queryByRole("button", { name: /Play again/i });

    expect(startButton).not.toBeInTheDocument();
    expect(resetButton).not.toBeInTheDocument();
  });
});

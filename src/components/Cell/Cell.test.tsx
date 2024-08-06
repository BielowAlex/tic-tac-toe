import { vitest } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Cell } from "./Cell.tsx";

describe("Cell Component", () => {
  test("Check handle click", () => {
    const handleClick = vitest.fn();
    render(<Cell handleClick={handleClick} children={"test cell"} />);

    const cell = screen.getByText("test cell");

    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

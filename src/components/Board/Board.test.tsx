import { render, screen } from "@testing-library/react";
import { Board } from "./Board.tsx";

describe("Board Component", () => {
  test("Render al of cells cells", () => {
    render(
      <Board
        board={Array(9).fill(null)}
        status={"playing"}
        pattern={[]}
        handleClick={() => {}}
      />,
    );

    const cells = screen.getAllByRole("listitem");

    expect(cells.length).toBe(9);
  });
});

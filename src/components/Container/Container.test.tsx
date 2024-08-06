import { Container } from "./Container.tsx";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("Container Component", () => {
  test("Disable moves when start button unpressed", () => {
    render(<Container />);
    const cells = screen.getAllByRole("listitem");

    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent("");
  });
  test("Allows players to make moves", () => {
    render(<Container />);
    const startButton = screen.getByRole("button", { name: /Play/i });
    fireEvent.click(startButton);

    const cells = screen.getAllByRole("listitem");

    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent("X");

    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveTextContent("O");
  });

  test("Declare a draw", () => {
    render(<Container />);
    const startButton = screen.getByRole("button", { name: /Play/i });
    fireEvent.click(startButton);

    const cells = screen.getAllByRole("listitem");

    act(() => {
      fireEvent.click(cells[0]); // X
      fireEvent.click(cells[1]); // O
      fireEvent.click(cells[2]); // X
      fireEvent.click(cells[4]); // O
      fireEvent.click(cells[3]); // X
      fireEvent.click(cells[5]); // O
      fireEvent.click(cells[7]); // X
      fireEvent.click(cells[6]); // O
      fireEvent.click(cells[8]); // X
    });

    expect(screen.getByText(/Draw!/i)).toBeInTheDocument();
  });
  test("Reset the game", () => {
    render(<Container />);
    const startButton = screen.getByRole("button", { name: /Play/i });
    fireEvent.click(startButton);

    const cells = screen.getAllByRole("listitem");

    act(() => {
      fireEvent.click(cells[0]); // X
      fireEvent.click(cells[1]); // O
      fireEvent.click(cells[2]); // X
      fireEvent.click(cells[4]); // O
      fireEvent.click(cells[3]); // X
      fireEvent.click(cells[5]); // O
      fireEvent.click(cells[7]); // X
      fireEvent.click(cells[6]); // O
      fireEvent.click(cells[8]); // X
    });

    const resetButton = screen.getByText("Play again");

    fireEvent.click(resetButton);

    expect(screen.getByText("Play")).toBeInTheDocument();
  });
});

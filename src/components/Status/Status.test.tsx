import { render, screen } from "@testing-library/react";
import { Status } from "./Status.tsx";

describe("Status Component", () => {
  test("Check idle status", () => {
    render(<Status status={"idle"} winner={"X"} player={"X"} />);

    const message = screen.getByText("Press the play button");

    expect(message).toBeInTheDocument();
  });

  test("Check playing status", () => {
    render(<Status status={"playing"} winner={"X"} player={"X"} />);

    const message = screen.getByText("Move player X");

    expect(message).toBeInTheDocument();
  });

  test("Check playing status", () => {
    render(<Status status={"won"} winner={"X"} player={"X"} />);

    const message = screen.getByText("Player X won!");

    expect(message).toBeInTheDocument();
  });
  test("Check Draw status", () => {
    render(<Status status={"draw"} winner={"X"} player={"X"} />);

    const message = screen.getByText("Draw!");

    expect(message).toBeInTheDocument();
  });
});

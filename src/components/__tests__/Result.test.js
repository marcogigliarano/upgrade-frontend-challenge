import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Result from "../Result";

describe("Result Component", () => {
  const onRetry = jest.fn();
  const onRestart = jest.fn();

  it("renders success message and button when isSuccess is true", () => {
    render(<Result isSuccess={true} onRetry={onRetry} onRestart={onRestart} />);

    expect(screen.getByText(/Success!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You should receive a confirmation email soon./i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Restart/i })
    ).toBeInTheDocument();
  });

  it("renders error message and button when isSuccess is false", () => {
    render(
      <Result isSuccess={false} onRetry={onRetry} onRestart={onRestart} />
    );

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Uh oh. Something went wrong. Please try again later/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Try Again/i })
    ).toBeInTheDocument();
  });

  it("calls onRestart when restart button is clicked", () => {
    render(<Result isSuccess={true} onRetry={onRetry} onRestart={onRestart} />);

    fireEvent.click(screen.getByRole("button", { name: /Restart/i }));
    expect(onRestart).toHaveBeenCalled();
  });

  it("calls onRetry when try again button is clicked", () => {
    render(
      <Result isSuccess={false} onRetry={onRetry} onRestart={onRestart} />
    );

    fireEvent.click(screen.getByRole("button", { name: /Try Again/i }));
    expect(onRetry).toHaveBeenCalled();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpForm from "../SignUpForm";

describe("SignUpForm Component", () => {
  const initialValues = { name: "", email: "", password: "" };

  const onSubmit = jest.fn((name, email, password) => {
    return Promise.resolve({ name, email, password });
  });

  beforeEach(() => {
    render(<SignUpForm initialValues={initialValues} onSubmit={onSubmit} />);
  });

  it("renders the form fields", () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it("displays validation errors for empty fields", async () => {
    fireEvent.click(screen.getByText(/Next/i));

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Invalid email address/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  it("calls onSubmit with correct values", async () => {
    fireEvent.input(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    fireEvent.submit(screen.getByText(/Next/i));

    await screen.findByText("Next");

    expect(onSubmit).toBeCalledWith(
      {
        email: "john@example.com",
        name: "John",
        password: "password123",
      },
      expect.anything()
    );
  });
});

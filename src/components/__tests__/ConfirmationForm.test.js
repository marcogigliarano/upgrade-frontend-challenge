import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Confirmation from "../ConfirmationForm";

describe("Confirmation Component", () => {
  const formData = {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    color: "Red",
    terms: true,
  };
  const onSubmit = jest.fn();
  const onBack = jest.fn();

  it("renders the form data", () => {
    render(
      <Confirmation
        formData={formData}
        onSubmit={onSubmit}
        onBack={onBack}
        loading={false}
      />
    );
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(formData.name)).toBeInTheDocument();

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(formData.email)).toBeInTheDocument();

    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText("******")).toBeInTheDocument();

    expect(screen.getByText(/Favorite Color/i)).toBeInTheDocument();
    expect(screen.getByText(formData.color)).toBeInTheDocument();

    expect(screen.getByText(/Agreed to Terms/i)).toBeInTheDocument();
    expect(screen.getByText("Yes")).toBeInTheDocument();
  });

  it("calls onSubmit when the form is submitted", async () => {
    render(
      <Confirmation
        formData={formData}
        onSubmit={onSubmit}
        onBack={onBack}
        loading={false}
      />
    );
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  it("handles loading state correctly", () => {
    render(
      <Confirmation
        formData={formData}
        onSubmit={onSubmit}
        onBack={onBack}
        loading={true}
      />
    );

    expect(screen.getByText(/Submitting.../i)).toBeDisabled();
    expect(screen.getByText(/Back/i)).toBeDisabled();
  });

  it("calls onBack when back button is clicked", () => {
    render(
      <Confirmation
        formData={formData}
        onSubmit={onSubmit}
        onBack={onBack}
        loading={false}
      />
    );
    fireEvent.click(screen.getByText(/Back/i));
    expect(onBack).toHaveBeenCalled();
  });
});

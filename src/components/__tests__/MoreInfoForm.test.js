import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MoreInfoForm from "../MoreInfoForm";

describe("MoreInfoForm Component", () => {
  const initialValues = { color: "", terms: false };
  const colors = ["Red", "Green", "Blue"];
  const onSubmit = jest.fn((color, terms) => {
    return Promise.resolve({ color, terms });
  });
  const onBack = jest.fn();

  it("renders the form fields", () => {
    render(
      <MoreInfoForm
        initialValues={initialValues}
        colors={colors}
        onSubmit={onSubmit}
        onBack={onBack}
        isLoading={false}
      />
    );
    expect(screen.getByLabelText(/Favorite Color/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/I agree to the terms and conditions/i)
    ).toBeInTheDocument();
  });

  it("displays validation errors for empty fields", async () => {
    render(
      <MoreInfoForm
        initialValues={initialValues}
        colors={colors}
        onSubmit={onSubmit}
        onBack={onBack}
        isLoading={false}
      />
    );
    fireEvent.click(screen.getByText(/Next/i));

    expect(await screen.findByText(/Color is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/You must agree to the terms/i)
    ).toBeInTheDocument();
  });

  it("calls onSubmit with correct values", async () => {
    render(
      <MoreInfoForm
        initialValues={initialValues}
        colors={colors}
        onSubmit={onSubmit}
        onBack={onBack}
        isLoading={false}
      />
    );
    fireEvent.change(screen.getByLabelText(/Favorite Color/i), {
      target: { value: "Red" },
    });
    fireEvent.click(
      screen.getByLabelText(/I agree to the terms and conditions/i)
    );
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
      expect(onSubmit).toBeCalledWith(
        {
          color: "Red",
          terms: true,
        },
        expect.anything()
      );
    });
  });

  it("handles loading state correctly", () => {
    render(
      <MoreInfoForm
        initialValues={initialValues}
        colors={colors}
        onSubmit={onSubmit}
        onBack={onBack}
        isLoading={true}
      />
    );

    expect(screen.getByText(/Next/i)).toBeDisabled();
    expect(screen.getByText(/Back/i)).toBeDisabled();
  });

  it("calls onBack when back button is clicked", () => {
    render(
      <MoreInfoForm
        initialValues={initialValues}
        colors={colors}
        onSubmit={onSubmit}
        onBack={onBack}
        isLoading={false}
      />
    );
    fireEvent.click(screen.getByText(/Back/i));
    expect(onBack).toHaveBeenCalled();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("FormComponent", () => {
  it("renders without crashing", () => {
    render(<FormComponent />);
  });

  it("validates the form fields", () => {
    const { getByLabelText, getByText } = render(<FormComponent />);

    // Simulate form submission without filling the fields
    fireEvent.click(getByText("Submit"));

    // Check if validation errors are displayed
    expect(getByText("Name must contain only letters")).toBeInTheDocument();
    expect(getByText("Invalid email format")).toBeInTheDocument();
    expect(getByText("Invalid date of birth format")).toBeInTheDocument();
    expect(
      getByText("Favorite color must contain only letters")
    ).toBeInTheDocument();
    expect(getByText("Salary must be greater than 0")).toBeInTheDocument();
  });

  it("submits the form when all fields are valid", () => {
    const { getByLabelText, getByText } = render(<FormComponent />);
    fireEvent.change(getByLabelText("Name"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(getByLabelText("Date of Birth"), {
      target: { value: "01/01/2000" },
    });
    fireEvent.change(getByLabelText("Favorite Color"), {
      target: { value: "Blue" },
    });
    fireEvent.change(getByLabelText("Salary"), { target: { value: "50000" } });
    fireEvent.click(getByText("Submit"));
    expect(getByText("Success!")).toBeInTheDocument();
  });
  it("checks if form fields are initially empty", () => {
    const { getByLabelText } = render(<FormComponent />);
    expect(getByLabelText("Name")).toHaveValue("");
    expect(getByLabelText("Email")).toHaveValue("");
    expect(getByLabelText("Date of Birth")).toHaveValue("");
    expect(getByLabelText("Favorite Color")).toHaveValue("");
    expect(getByLabelText("Salary")).toHaveValue("0");
  });

  it("updates form fields when user types into them", () => {
    const { getByLabelText } = render(<FormComponent />);
    fireEvent.change(getByLabelText("Name"), { target: { value: "John Doe" } });
    expect(getByLabelText("Name")).toHaveValue("John Doe");
    // Repeat for other fields
  });

  it("does not submit the form when there are validation errors", () => {
    const { getByLabelText, getByText } = render(<FormComponent />);
    fireEvent.change(getByLabelText("Name"), { target: { value: "123" } }); // Invalid name
    fireEvent.click(getByText("Submit"));
    expect(getByText("Name must contain only letters")).toBeInTheDocument();
  });
});

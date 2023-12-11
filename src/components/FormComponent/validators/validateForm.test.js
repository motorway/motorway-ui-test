import { validateForm } from "./validateForm";

describe("validateForm", () => {
  it("should return an empty object if all fields are valid", () => {
    const formData = {
      name: "John Doe",
      email: "john@example.com",
      dob: "01/01/1990",
      color: "blue",
      salary: 50000,
    };

    const errors = validateForm(formData);

    expect(errors).toEqual({});
  });

  it("should return errors for invalid fields", () => {
    const formData = {
      name: "",
      email: "invalid-email",
      dob: "1990-01-01",
      color: "123",
      salary: 0,
    };

    const errors = validateForm(formData);

    expect(errors).toEqual({
      name: "Name must contain only letters",
      email: "Invalid email format",
      dob: "Invalid date of birth format",
      color: "Favorite color must contain only letters",
      salary: "Salary must be greater than 0",
    });
  });
});

import { validateDateOfBirth } from "./validateDateOfBirth";

describe("validateDateOfBirth", () => {
  it("should return true for valid date of birth", () => {
    const validDateOfBirth = "01/01/1990";
    const isValid = validateDateOfBirth(validDateOfBirth);
    expect(isValid).toBe(true);
  });

  it("should return false for invalid date of birth", () => {
    const invalidDateOfBirth = "31/02/2000";
    const isValid = validateDateOfBirth(invalidDateOfBirth);
    expect(isValid).toBe(false);
  });

  // Add more test cases here for different scenarios
});

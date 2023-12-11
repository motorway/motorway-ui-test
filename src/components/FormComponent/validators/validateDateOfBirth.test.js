import { validateDateOfBirth } from "./validateDateOfBirth";

describe("validateDateOfBirth", () => {
  it("should return true for valid date of birth", () => {
    const validDateOfBirth = "01/01/1990";
    const isValid = validateDateOfBirth(validDateOfBirth);
    expect(isValid).toBe(true);
  });

  it("should return true for valid date of birth", () => {
    const validDateOfBirth = "29/02/2000"; // *** leap year
    const isValid = validateDateOfBirth(validDateOfBirth);
    expect(isValid).toBe(true);
  });
});

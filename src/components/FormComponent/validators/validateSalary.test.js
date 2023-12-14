import { validateSalary } from "./validateSalary";

test("validateSalary returns true for positive salary", () => {
  expect(validateSalary(1000)).toBe(true);
});

test("validateSalary returns false for zero salary", () => {
  expect(validateSalary(0)).toBe(false);
});

test("validateSalary returns false for negative salary", () => {
  expect(validateSalary(-1000)).toBe(false);
});

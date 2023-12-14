import { validateName } from "./validateName";

test("validates a valid name", () => {
  const validName = "John Doe";
  expect(validateName(validName)).toBe(true);
});

test("validates an invalid name", () => {
  const invalidName = "John123";
  expect(validateName(invalidName)).toBe(false);
});

test("validates an empty name", () => {
  const emptyName = "";
  expect(validateName(emptyName)).toBe(false);
});

test("validates a name with special characters", () => {
  const nameWithSpecialChars = "John@Doe";
  expect(validateName(nameWithSpecialChars)).toBe(false);
});

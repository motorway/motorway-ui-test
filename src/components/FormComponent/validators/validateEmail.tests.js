import { validateEmail } from "./validateEmail";

test("valid email should return true", () => {
  const email = "test@example.com";
  expect(validateEmail(email)).toBe(true);
});

test("invalid email should return false", () => {
  const email = "invalidemail";
  expect(validateEmail(email)).toBe(false);
});

test("email without domain should return false", () => {
  const email = "test@";
  expect(validateEmail(email)).toBe(false);
});

test("email without top-level domain should return false", () => {
  const email = "test@example";
  expect(validateEmail(email)).toBe(false);
});

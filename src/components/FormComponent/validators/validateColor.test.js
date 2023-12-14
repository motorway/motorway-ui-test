import { validateColor } from "./validateColor";

test("validateColor should return true for valid colors", () => {
  expect(validateColor("red")).toBe(true);
  expect(validateColor("green")).toBe(true);
  expect(validateColor("blue")).toBe(true);
});

test("validateColor should return false for invalid colors", () => {
  expect(validateColor("123")).toBe(false);
  expect(validateColor("!@#$")).toBe(false);
  expect(validateColor("white ")).toBe(false);
});

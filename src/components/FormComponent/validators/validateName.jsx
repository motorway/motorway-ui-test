export function validateName(name) {
  return /^[A-Za-z\s]+$/.test(name);
}

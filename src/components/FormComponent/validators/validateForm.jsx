import { validateName } from "./validateName";
import { validateEmail } from "./validateEmail";
import { validateColor } from "./validateColor";
import { validateDateOfBirth } from "./validateDateOfBirth";
import { validateSalary } from "./validateSalary";

export function validateForm(formData) {
  const newErrors = {};

  if (!formData.name.trim() || !validateName(formData.name.trim())) {
    newErrors.name = "Name must contain only letters";
  }
  // Validate email
  if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
    newErrors.email = "Invalid email format";
  }
  // Validate DOB:
  if (!formData.dob.trim() || !validateDateOfBirth(formData.dob.trim())) {
    newErrors.dob = "Invalid date of birth format";
  }

  // Validate color
  if (!formData.color.trim() || !validateColor(formData.color.trim())) {
    newErrors.color = "Favorite color must contain only letters";
  }

  if (!validateSalary(formData.salary)) {
    newErrors.salary = "Salary must be greater than 0";
  }
  return newErrors;
}

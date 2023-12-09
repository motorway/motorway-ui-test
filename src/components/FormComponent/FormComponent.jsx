import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    color: "",
    salary: 0,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const validateColor = (color) => /^[A-Za-z]+$/.test(color);

  const validateDateOfBirth = (dob) => {
    // Basic validation for a date format (YYYY-MM-DD)
    return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/.test(dob);
  };

  const validateSalary = (salary) => {
    return Number(salary) > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    setErrors(newErrors);

    // Handle the form data (you may want to submit to a server here)
    if (Object.keys(newErrors).length === 0) {
      // Handle the form data (you may want to submit to a server here)
      console.log("Form data submitted:", formData);
      setSuccess(true);
    }
  };

  const SuccessFormSubmitted = () => {
    return (
      <div className="success-container">
        <h1 className="success-message">Success!</h1>
      </div>
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {success ? (
          <SuccessFormSubmitted />
        ) : (
          <>
            <div className="input-wrapper">
              <label>
                Name:
                <input
                  id={errors.name ? "nameError" : "name"}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Name"
                  aria-describedby={errors.name ? "nameError" : null}
                  placeholder="Please enter your name"
                />
              </label>
              {errors.name && <div id="nameError">{errors.name}</div>}
            </div>
            <div className="input-wrapper">
              <label>
                Email:
                <input
                  id={errors.email ? "emailError" : "email"}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email"
                  aria-describedby={errors.email ? "emailError" : null}
                  placeholder="Please enter your email"
                />
              </label>
              {errors.email && <div id="emailError">{errors.email}</div>}
            </div>
            <div className="input-wrapper">
              <label>
                Date of Birth:
                <input
                  id={errors.dob ? "dobError" : "dob"}
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  aria-label="Date of Birth"
                  aria-describedby={errors.dob ? "dobError" : null}
                  placeholder="Please enter your date of birth in the format DD/MM/YYYY"
                />
              </label>
              {errors.dob && <div id="dobError">{errors.dob}</div>}
            </div>
            <div className="input-wrapper">
              <label>
                Favorite Color:
                <input
                  id={errors.color ? "colorError" : "color"}
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  aria-label="Favorite Color"
                  aria-describedby={errors.color ? "colorError" : null}
                  placeholder="Please enter your favorite color"
                />
              </label>
              {errors.color && <div id="colorError">{errors.color}</div>}
            </div>
            <div className="wrapper-for-salary-and-error">
              <div className="range-salary-wrapper">
                <label className="salary-label">
                  Salary:
                  <input
                    type="range"
                    name="salary"
                    min="0"
                    max="100000"
                    value={formData.salary}
                    step="500"
                    onChange={handleChange}
                    aria-label="Salary"
                    aria-describedby={errors.salary ? "salaryError" : null}
                  />
                </label>
                <div className="salary">{`£ ${formData.salary}`}</div>
              </div>
              {errors.salary && <div id="salaryError">{errors.salary}</div>}
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default FormComponent;

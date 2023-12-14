import React, { useState } from "react";
import "./FormComponent.css";
import { validateForm } from "./validators/validateForm";

const SuccessFormSubmitted = () => {
  return (
    <div className="success-container">
      <h1 className="success-message">Success!</h1>
    </div>
  );
};

const FormatSalary = (salary) => {
  return salary.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
  });
};

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    color: "",
    salary: 0,
  });

  const { name, email, dob, color, salary } = formData;
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const {
    name: nameError,
    email: emailError,
    dob: dobError,
    color: colorError,
    salary: salaryError,
  } = errors;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formData);
      setSuccess(true);
    }
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
                  id={nameError ? "nameError" : "name"}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  aria-label="Name"
                  aria-describedby={nameError ? "nameError" : null}
                  placeholder="Please enter your full name"
                />
                {errors.name && (
                  <div className={errors.name ? "visible" : "hidden"}>
                    {errors.name || ""}
                  </div>
                )}
              </label>
            </div>
            <div className="input-wrapper">
              <label>
                Email:
                <input
                  id={emailError ? "emailError" : "email"}
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  aria-label="Email"
                  aria-describedby={emailError ? "emailError" : null}
                  placeholder="Please enter your email address"
                />
              </label>
              {emailError && (
                <div className={emailError ? "visible" : "hidden"}>
                  {emailError || ""}
                </div>
              )}
            </div>
            <div className="input-wrapper">
              <label>
                Date of Birth:
                <input
                  id={dobError ? "dobError" : "dob"}
                  type="text"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                  aria-label="Date of Birth"
                  aria-describedby={dobError ? "dobError" : null}
                  placeholder="DD/MM/YYYY"
                />
              </label>
              {dobError && (
                <div className={dobError ? "visible" : "hidden"}>
                  {dobError}
                </div>
              )}
            </div>
            <div className="input-wrapper">
              <label>
                Favorite Color:
                <input
                  id={colorError ? "colorError" : "color"}
                  type="text"
                  name="color"
                  value={color}
                  onChange={handleChange}
                  aria-label="Favorite Color"
                  aria-describedby={colorError ? "colorError" : null}
                  placeholder="Please enter your favorite color"
                />
              </label>
              {colorError && (
                <div className={colorError ? "visible" : "hidden"}>
                  {errors.color}
                </div>
              )}
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
                    value={salary}
                    step="500"
                    onChange={handleChange}
                    aria-label="Salary"
                    aria-describedby={salaryError ? "salaryError" : null}
                  />
                </label>
                <div className="salary">{`£ ${FormatSalary(salary)}`}</div>
              </div>
              {salaryError && (
                <div className={salaryError ? "visible" : "hidden"}>
                  {salaryError}
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default FormComponent;

import React from "react";

import "./form.css";

const Form = () => {
  const [formErrors, setFormErrors] = React.useState({
    name: false,
    email: false,
    dob: false,
  });

  const handleSetFormError = (target: EventTarget, error: boolean) => {
    setFormErrors({
      ...formErrors,
      [(target as HTMLInputElement).id]: error,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    alert(
      `Form submitted\nName: ${formData.get(
        "Name"
      )}\nDate of birth: ${formData.get(
        "Date of birth"
      )}\nEmail: ${formData.get("Email")}\nColour: ${formData.get(
        "Colour"
      )}\nSalary: ${formData.get("salary")}`
    );
  };

  return (
    <section className="form-section">
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input
          id="name"
          name="Name"
          type="text"
          required
          onInput={(e) => handleSetFormError(e.target, false)}
          onInvalid={(e) => handleSetFormError(e.target, true)}
        />
        {formErrors.name && (
          <span className="form-input-error">Please enter a name</span>
        )}
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="Email"
          required
          onInput={(e) => handleSetFormError(e.target, false)}
          onInvalid={(e) => handleSetFormError(e.target, true)}
        />
        {formErrors.email && (
          <span className="form-input-error">
            Please enter a valid email address
          </span>
        )}
        <label htmlFor="dob">Enter your date of birth:</label>
        <input
          id="dob"
          name="Date of birth"
          type="date"
          role="date-input"
          required
          pattern="\d{4}-\d{2}-\d{2}"
          onInput={(e) => handleSetFormError(e.target, false)}
          onInvalid={(e) => handleSetFormError(e.target, true)}
        />
        {formErrors.email && (
          <span className="form-input-error">
            Please select a date of birth
          </span>
        )}
        <label htmlFor="colour">Select favourite colour:</label>
        <input type="color" id="colour" name="Colour" required />
        <label htmlFor="colour">Select a salary: (0 - 100000)</label>
        <input
          type="range"
          id="salary"
          name="salary"
          min="0"
          max="100000"
          step="10"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;

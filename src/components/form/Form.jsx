import React, { useState } from "react";
import "./index.css";

const Form = () => {
  const [validator, setValidator] = useState({
    name: false,
    email: false,
    dob: false,
    color: false,
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    dob: "",
    color: "",
  });

  const handleSubmit = () => {
    validateFields();
  };

  const handleChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  const validateFields = () => {
    Object.keys(formValues).map((key) => {
      if (formValues[key] === "") {
        setValidator((current) => ({
          ...current,
          [key]: true,
        }));
      } else {
        if (validator[key]) {
          setValidator((current) => ({
            ...current,
            [key]: false,
          }));
        }
      }
    });
  };

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Musammil"
          id="name"
          onChange={(e) => handleChange("name", e.target.value)}
          value={formValues.name}
        />
        {validator.name && (
          <div className="text-danger">Please input a name</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name" className="label">
          Email
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="musammil@gmail.com"
          onChange={(e) => handleChange("email", e.target.value)}
          value={formValues.email}
        />
        {validator.email && (
          <div className="text-danger">Please input a email</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name" className="label">
          Date of birth
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="28-07-1995"
          onChange={(e) => handleChange("dob", e.target.value)}
          value={formValues.dob}
        />
        {validator.dob && (
          <div className="text-danger">Please input a date of birth</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name" className="label">
          Favourite colour
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Blue"
          onChange={(e) => handleChange("color", e.target.value)}
          value={formValues.color}
        />
        {validator.color && (
          <div className="text-danger">Please input a colour</div>
        )}
      </div>

      <div className="action">
        <button className="submit-botton" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Form;

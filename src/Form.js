import React, { useState } from "react";

const Form = () => {
  const [salary, setSalary] = useState("20000");
  const minSalary = "20000";
  const maxSalary = "80000";

  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  return (
    <div className="form">
      <div className="form-container">
        <form>
          <label>
            Name <br />
            <input type="text" placeholder="Name" required />
          </label>
          <label>
            Email <br />
            <input type="email" placeholder="Email address" required />
          </label>
          <label>
            Date of birth <br />
            <input type="date" required />
          </label>
          <label>
            Favourite colour <br />
            <input type="color" required />
          </label>
          <label htmlFor="salary">
            Salary <br />
            <input
              id="salary"
              type="range"
              min={minSalary}
              max={maxSalary}
              //   value={(e) => e.target.value}
              step="5000"
              onChange={handleSalary}
              required
            />
            <output>£{salary}</output>
          </label>
          <button className="submit-button" type="submit">
            Sign me up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

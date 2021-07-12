import { useState } from "react";
import "./form.scss";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDOB] = useState();
  const [color, setColor] = useState('#000');
  const [salary, setSalary] = useState(250);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('final data submitted', { name, email, dob, color, salary });
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="input-group">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value?.trim())}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="example@email.com"
            required
            onChange={(e) => setEmail(e.target.value?.trim())}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            required
            onChange={(e) => setDOB(e.target.value?.trim())}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value?.trim())}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="range"
            min={0}
            max={1000}
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value?.trim())}
          />
        </div>
        <button id="submit" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;

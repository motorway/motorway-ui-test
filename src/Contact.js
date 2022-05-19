import React, { useState } from "react";


const Contact = () => {
  const [money, setMoney] = useState("0");
  const bigMoney = "100000";
  

  const handleMoney = (e) => {
    setMoney(e.target.value);
  };
  return (
    <div className="contact">
            {/* <div
        className="leftSide"> 
        <img src={myImage} alt="" ></img>
        </div> */}
      <div className="rightSide">
        <form id="form">
          <label >
          Full Name
            <input className="feedback-input" 
            type="text" 
            placeholder="Name" 
            required />
          </label>
          <label >
            Email Address 
            <input className="feedback-input"
             type="email" 
             placeholder="Email address"
              required />
          </label>
          <label  >
            Date Of Birth 
            <input className="feedback-input" 
            type="date" 
            required />
          </label>
          <label  >
            Pick Your Favourite Colour 
            <input className="feedback-input" 
            type="color" 
            required />
          </label>
          <label htmlFor="salary">
            Your Salary 
            <input
              id="salary"
              type="range"
              max={bigMoney}
              step="100"
              onChange={handleMoney}
              required
            />
            <output className="feedback-input" >£{money}</output>
          </label>
          <div className="sign-up">
          <button className="feedback-input"
           type="submit">
            Let Me In
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
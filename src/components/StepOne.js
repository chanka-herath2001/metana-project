import React from "react";
import { useNavigate } from "react-router-dom";
import "./StepOne.css";

const StepOne = () => {
  const navigate = useNavigate();

  const goToStepTwo = () => {
    navigate("/step-two");
  };

  return (
    <div className="step-one">
      <img
        src="/images/logo.png"
        alt="Buildform Logo"
        className="logo-top-left"
      />
      <div className="form-container">
        <div className="question-container">
          <span className="question-number">1 ➞</span>
          <h1>Before we start, what is your name?</h1>
          <div className="input-container">
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" placeholder="Jane" />
          </div>
          <div className="input-container">
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" placeholder="Smith" />
          </div>
          <button className="ok-button" onClick={goToStepTwo}>
            OK
          </button>
          <span className="press-enter">press Enter ↵</span>
        </div>
      </div>
    </div>
  );
};

export default StepOne;

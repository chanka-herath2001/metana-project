// src/components/StepTwo.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./StepTwo.css";

const StepTwo = () => {
  const navigate = useNavigate();

  const goToStepThree = () => {
    navigate("/step-three");
  };

  return (
    <div className="step-two">
      <img
        src="/images/logo.png"
        alt="Buildform Logo"
        className="logo-top-left"
      />
      <div className="form-container">
        <div className="question-container">
          <span className="question-number">2 ➞</span>
          <h1>What’s your email address?</h1>
          <p>This is how we’ll contact you.</p>
          <div className="input-container">
            <input type="email" id="email" placeholder="name@example.com" />
          </div>
          <button className="ok-button" onClick={goToStepThree}>
            OK
          </button>
          <span className="press-enter">press Enter ↵</span>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;

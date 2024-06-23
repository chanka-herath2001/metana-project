// src/components/StartPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  const startForm = () => {
    navigate("/step-one");
  };

  return (
    <div className="start-page">
      <div className="left-section">
        <img src="/images/logo.png" alt="Buildform Logo" className="logo" />
        <h1>Launch your Data Career in Weeks, not Years</h1>
        <p>What to expect:</p>
        <ul>
          <li>
            <strong>Short-answer</strong> questions & <strong>No</strong> cover
            letter
          </li>
          <li>Takes 4 mins on average</li>
        </ul>
        <button onClick={startForm} className="start-button">
          Start Your Journey
        </button>
        <span className="press-enter">press Enter ↵</span>
        <p className="people-count">👥 167 people have filled this out</p>
      </div>
      <div className="right-section">
        <p className="course-report">Rated on Course Report</p>
        <p className="rating">4.8</p>
        <p className="companies">Our students used to work at</p>
        <div className="company-logos">
          <img src="/images/google.png" alt="Google" />
          <img src="/images/ibm.png" alt="IBM" />
          <img src="/images/nike.png" alt="Nike" />
          <img src="/images/eay.png" alt="eBay" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;

import React, { useState } from "react";
import "./StepSix.css";

const experienceLevels = [
  {
    value: "no_experience",
    label: "No experience (I have never programmed before.)",
  },
  {
    value: "beginner",
    label:
      "Beginner (I have played with some introductory coding lessons and tutorials.)",
  },
  {
    value: "intermediate",
    label: "Intermediate (I have completed some coding classes or tutorials.)",
  },
  { value: "advanced", label: "Advanced (I can build applications.)" },
  {
    value: "professional",
    label: "Professional (I am an experienced software engineer.)",
  },
];

const StepSix = () => {
  const [selectedExperience, setSelectedExperience] = useState("");

  const selectExperience = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="step-six">
      <img
        src="/images/logo.png"
        alt="Buildform Logo"
        className="logo-top-left"
      />
      <div className="form-container">
        <div className="question-container">
          <span className="question-number">6 ➞</span>
          <h1>
            How would you describe your current level of coding experience?
          </h1>
          <div className="options-container">
            {experienceLevels.map((level) => (
              <button
                key={level.value}
                className={`option-button ${
                  selectedExperience === level.value ? "selected" : ""
                }`}
                onClick={() => selectExperience(level.value)}
              >
                {level.label}
              </button>
            ))}
          </div>
          <button className="ok-button">OK</button>
        </div>
      </div>
    </div>
  );
};

export default StepSix;

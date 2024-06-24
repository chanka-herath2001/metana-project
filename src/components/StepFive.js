import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepFive.css";

const languages = [
  { value: "solidity", label: "Solidity" },
  { value: "rust", label: "Rust" },
  { value: "nodejs", label: "Node.js" },
  { value: "typescript", label: "Typescript" },
  { value: "javascript", label: "Javascript" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "sql", label: "SQL" },
  { value: "python", label: "Python" },
  { value: "assembly", label: "Assembly Language" },
  { value: "haskell", label: "Haskell" },
  { value: "r", label: "R" },
  { value: "dotnet", label: ".NET" },
  { value: "other", label: "Other" },
];

const StepFive = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const toggleLanguage = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((l) => l !== language)
        : [...prevSelected, language]
    );
  };

  const navigate = useNavigate();

  const navigateToStepSix = () => {
    navigate("/step-six");
  };

  return (
    <div className="step-five">
      <img
        src="/images/logo.png"
        alt="Buildform Logo"
        className="logo-top-left"
      />
      <div className="form-container">
        <div className="question-container">
          <span className="question-number">5 ➞</span>
          <h1 className="question-text">
            What languages and frameworks are you familiar with?
          </h1>
          <p className="subtext">Select all the languages you know.</p>
          <div className="options-container">
            {languages.map((language) => (
              <button
                key={language.value}
                className={`option-button ${
                  selectedLanguages.includes(language.value) ? "selected" : ""
                }`}
                onClick={() => toggleLanguage(language.value)}
              >
                {language.label}
              </button>
            ))}
          </div>
          <button className="ok-button">OK</button>
        </div>
      </div>
    </div>
  );
};

export default StepFive;

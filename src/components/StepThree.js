import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./StepThree.css";

const countries = [
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CN", label: "China" },
  { value: "CA", label: "Canada" },
  { value: "AE", label: "United Arab Emirates" },
  // Add more countries as needed
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    borderBottom: "2px solid #D3BFFF",
    borderRadius: "0",
    boxShadow: "none",
    fontSize: "16px",
    color: "#D3BFFF",
    padding: "10px",
    cursor: "text",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#D3BFFF",
    fontSize: "24px",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#D3BFFF",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#F8F5FF",
    border: "none",
    boxShadow: "none",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "16px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#D3BFFF" : "#F8F5FF",
    color: state.isSelected ? "#fff" : "#D3BFFF",
    "&:hover": {
      backgroundColor: "#E8DFFF",
    },
    padding: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#D3BFFF",
  }),
};

const StepThree = () => {
  const navigate = useNavigate();

  const goToStepFour = () => {
    navigate("/step-four");
  };

  return (
    <div className="step-three">
      <img
        src="/images/logo.png"
        alt="Buildform Logo"
        className="logo-top-left"
      />
      <div className="form-container">
        <div className="question-container">
          <span className="question-number">3 ➔</span>
          <h1>
            Which country you are from?{" "}
            <span role="img" aria-label="house">
              🏡🏡🏡
            </span>
          </h1>
          <div className="input-container">
            <Select
              id="country"
              options={countries}
              placeholder="Type or select an option"
              className="country-select"
              styles={customStyles}
            />
          </div>
          <button className="ok-button" onClick={goToStepFour}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;

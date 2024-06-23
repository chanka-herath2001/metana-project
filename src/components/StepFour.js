import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./StepFour.css";

const countries = [
  { value: "DZ", label: "Algeria", code: "+213" },
  { value: "US", label: "United States", code: "+1" },
  { value: "CA", label: "Canada", code: "+1" },
  { value: "GB", label: "United Kingdom", code: "+44" },
  { value: "AU", label: "Australia", code: "+61" },
  // Add more countries as needed
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    fontSize: "24px",
    color: "#D3BFFF",
    padding: "10px",
    cursor: "text",
    display: "flex",
    alignItems: "center",
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
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#D3BFFF",
    display: "flex",
    alignItems: "center",
  }),
};

const formatOptionLabel = ({ value, label, code, icon }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
      alt=""
      style={{ marginRight: 10 }}
    />
    <span>{code}</span>
  </div>
);

const StepFour = () => {
  const navigate = useNavigate();

  const goToStepFive = () => {
    navigate("/step-five");
  };

  return (
    <div className="step-four">
      <img
        src="/images/logo.png"
        alt="Buildform Logo"
        className="logo-top-left"
      />
      <div className="form-container">
        <div className="question-container">
          <span className="question-number">4 ➞</span>
          <h1>What is your phone number?</h1>
          <div className="input-container">
            <div className="phone-input">
              <Select
                id="countryCode"
                options={countries.map((country) => ({
                  value: country.value,
                  label: country.label,
                  code: country.code,
                  icon: `https://flagcdn.com/16x12/${country.value.toLowerCase()}.png`,
                }))}
                placeholder={
                  <img
                    src="https://flagcdn.com/16x12/dz.png"
                    alt="Algeria Flag"
                    style={{ marginRight: 10 }}
                  />
                }
                className="country-code-select"
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
              />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="0551 23 45 67"
                className="phone-number-input"
              />
            </div>
          </div>
          <button className="ok-button" onClick={goToStepFive}>
            OK
          </button>
          <span className="press-enter">press Enter ↵</span>
        </div>
      </div>
    </div>
  );
};

export default StepFour;

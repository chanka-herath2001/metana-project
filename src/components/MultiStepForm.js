// src/components/MultiStepForm.js
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return <StepThree prevStep={prevStep} values={formData} />;
    default:
      return (
        <StepOne
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
  }
};

export default MultiStepForm;

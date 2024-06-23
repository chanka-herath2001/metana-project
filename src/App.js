// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import StepFive from "./components/StepFive";
import StepFour from "./components/StepFour";
import StepOne from "./components/StepOne";
import StepSix from "./components/StepSix";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/step-one" element={<StepOne />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="/step-four" element={<StepFour />} />
        <Route path="/step-five" element={<StepFive />} />
        <Route path="/step-six" element={<StepSix />} />
      </Routes>
    </Router>
  );
}

export default App;

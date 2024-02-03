import React from "react";
import "./Steps.css";

function Steps({ currentStep }) {
  const steps = [
    {
      id: 1,
      name: "Your Info",
    },
    {
      id: 2,
      name: "Select Plan",
    },
    {
      id: 3,
      name: "Add-Ons",
    },
    {
      id: 4,
      name: "Summary",
    },
  ];
  return (
    <div className="steps-container">
      {steps.map((step) => (
        <div className="step" key={step.id}>
          <button
            className={`step-button ${
              currentStep === step.id ? "active-step" : ""
            }`}
          >
            {step.id}
          </button>
          <div className="step-info">
            <span className="step-number">Step {step.id}</span>
            <span className="step-name">{step.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;

import React from "react";
import "./Buttons.css";

function Buttons({ currentStep, setCurrentStep, nextStepHandler }) {
  return (
    <div className="buttons-container">
      {currentStep === 1 ? null : (
        <button
          className="go-back-button"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Go Back
        </button>
      )}
      {currentStep === 1 || currentStep === 2 || currentStep === 3 ? (
        <button
          type="submit"
          className="next-step-button"
          onClick={() => {
            nextStepHandler();
          }}
        >
          Next Step
        </button>
      ) : currentStep === 4 ? (
        <button
          type="submit"
          className="confirm-button"
          onClick={nextStepHandler}
        >
          Confirm
        </button>
      ) : null}
    </div>
  );
}

export default Buttons;

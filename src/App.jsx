import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import SelectPlan from "./Components/SelectPlan/SelectPlan";
import AddOns from "./Components/AddOns/AddOns";
import FormSummary from "./Components/FormSummary/FormSummary";
import Message from "./Components/Message/Message";
import Buttons from "./Components/Buttons/Buttons";
import Steps from "./Components/Steps/Steps";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizable, setCustomizable] = useState(false);
  const [plan, setPlan] = useState();
  const [proPrice, setProPrice] = useState();
  const [arcadePrice, setArcadePrice] = useState();
  const [advancedPrice, setAdvancedPrice] = useState();
  const [planError, setPlanError] = useState(false);
  const [monthly, setMonthly] = useState(true);
  const handleInputChange = (e, id) => {
    const { value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));
    errorHandler();
  };
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
  });
  const errorHandler = () => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const errors = {};
    if (userInfo.name === "") {
      errors.name = "This field is required";
    }

    if (userInfo.number === "") {
      errors.number = "This field is required";
    }

    if (!emailRegex.test(userInfo.email)) {
      errors.email = "This Email is not valid";
    }

    setFormErrors(errors);
  };

  const nextStepHandler = () => {
    if (
      userInfo.name === "" ||
      userInfo.email === "" ||
      userInfo.number === ""
    ) {
      errorHandler(); // If any field is empty, handle the errors
    } else if (formErrors.name || formErrors.email || formErrors.number) {
      errorHandler(); // If there are errors in any field, handle them
    } else if (currentStep === 2) {
      if (!plan) {
        setPlanError(true);
      } else {
        setPlanError(false);
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1); // Move to the next step
    }
  };
  return (
    <>
      <main>
        <div className="main-container">
          <div>
            <Steps currentStep={currentStep} />
          </div>
          <div>
            {currentStep === 1 ? (
              <Form
                userInfo={userInfo}
                handleInputChange={handleInputChange}
                formErrors={formErrors}
                nextStepHandler={nextStepHandler}
              />
            ) : currentStep === 2 ? (
              <SelectPlan
                plan={plan}
                setPlan={setPlan}
                setArcadePrice={setArcadePrice}
                setAdvancedPrice={setAdvancedPrice}
                setProPrice={setProPrice}
                planError={planError}
                monthly={monthly}
                setMonthly={setMonthly}
              />
            ) : currentStep === 3 ? (
              <AddOns
                onlineService={onlineService}
                setOnlineService={setOnlineService}
                largerStorage={largerStorage}
                setLargerStorage={setLargerStorage}
                customizable={customizable}
                setCustomizable={setCustomizable}
                monthly={monthly}
              />
            ) : currentStep === 4 ? (
              <FormSummary
                onlineService={onlineService}
                largerStorage={largerStorage}
                customizable={customizable}
                plan={plan}
                setCurrentStep={setCurrentStep}
                advancedPrice={advancedPrice}
                proPrice={proPrice}
                arcadePrice={arcadePrice}
                monthly={monthly}
              />
            ) : currentStep === 5 ? (
              <Message />
            ) : null}
            {currentStep === 5 ? null : (
              <Buttons
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                nextStepHandler={nextStepHandler}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

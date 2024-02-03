import React from "react";
import "./FormSummary.css";

function FormSummary({
  onlineService,
  largerStorage,
  customizable,
  plan,
  setCurrentStep,
  arcadePrice,
  advancedPrice,
  proPrice,
  monthly,
}) {
  let totalPrice = advancedPrice + arcadePrice + proPrice;
  if (onlineService) {
    if (monthly) {
      totalPrice += 1;
    } else {
      totalPrice += 10;
    }
  }
  if (largerStorage) {
    if (monthly) {
      totalPrice += 2;
    } else {
      totalPrice += 20;
    }
  }
  if (customizable) {
    if (monthly) {
      totalPrice += 2;
    } else {
      totalPrice += 20;
    }
  }
  console.log(totalPrice);
  return (
    <div className="plan-container">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary-container">
        <div>
          <div className="summary-plan">
            <span>
              {plan === "arcade"
                ? "Arcade"
                : plan === "advanced"
                ? "Advanced"
                : plan === "pro"
                ? "Pro"
                : null}
            </span>
            <button onClick={() => setCurrentStep(2)}>Change</button>
          </div>
          <span className="summary-plan-price">
            {" "}
            {plan === "arcade"
              ? `$${arcadePrice}/mo`
              : plan === "advanced"
              ? `$${advancedPrice}/mo`
              : plan === "pro"
              ? `$${proPrice}/mo`
              : null}
          </span>
        </div>
        <hr />
        {onlineService ? (
          <div>
            <span>Online Service</span>
            <span>{monthly ? "+$1/mo" : "+$10/yr"}</span>
          </div>
        ) : null}
        {largerStorage ? (
          <div>
            <span>Larger Storage</span>
            <span>{monthly ? "+$2/mo" : "+$20/yr"}</span>
          </div>
        ) : null}
        {customizable ? (
          <div>
            <span>Customizable profile</span>
            <span>{monthly ? "+$2/mo" : "+$20/yr"}</span>
          </div>
        ) : null}
      </div>
      <div className="total-container">
        <span>Total (per month) </span>
        <span className="total-price">
          +$
          {totalPrice}
          /mo
        </span>
      </div>
    </div>
  );
}

export default FormSummary;

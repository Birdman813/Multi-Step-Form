import React, { useState } from "react";
import arcadeImg from "../../assets/icon-arcade.svg";
import advancedImg from "../../assets/icon-advanced.svg";
import proImg from "../../assets/icon-pro.svg";
import "./SelectedPlan.css";

function SelectPlan({
  plan,
  setPlan,
  setArcadePrice,
  setAdvancedPrice,
  setProPrice,
  planError,
  monthly,
  setMonthly,
}) {
  return (
    <div className="plan-container">
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plan-buttons-container">
        <button
          onClick={(e) => {
            setPlan("arcade"),
              setArcadePrice(monthly ? 9 : 90),
              setAdvancedPrice(0),
              setProPrice(0);
          }}
          className={plan === "arcade" ? "selected-plan" : ""}
        >
          <div className="plan-button">
            <img src={arcadeImg} alt="arcade" />
            <div>
              <span className="plan-name">Arcade</span>
              <span className="plan-price">{monthly ? "$9/mo" : "$90/yr"}</span>
            </div>
          </div>
        </button>
        <button
          onClick={(e) => {
            setPlan("advanced"),
              setAdvancedPrice(monthly ? 12 : 120),
              setArcadePrice(0),
              setProPrice(0);
          }}
          className={plan === "advanced" ? "selected-plan" : ""}
        >
          <div className="plan-button">
            <img src={advancedImg} alt="advanced" />
            <div>
              <span className="plan-name">Advanced</span>
              <span className="plan-price">
                {monthly ? "$12/mo" : "$120/yr"}
              </span>
            </div>
          </div>
        </button>
        <button
          onClick={(e) => {
            setPlan("pro"),
              setProPrice(monthly ? 15 : 150),
              setArcadePrice(0),
              setAdvancedPrice(0);
          }}
          className={plan === "pro" ? "selected-plan" : ""}
        >
          <div className="plan-button">
            <img src={proImg} alt="advanced" />
            <div>
              <span className="plan-name">Pro</span>
              <span className="plan-price">
                {monthly ? "$15/mo" : "$150/yr"}
              </span>
            </div>
          </div>
        </button>
      </div>
      {planError ? <p className="plan-error">Choose Your Plan</p> : null}
      <div className="toggle-container">
        <span>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            value={monthly}
            checked={!monthly}
            onChange={() => {
              setMonthly(!monthly), setPlan("");
            }}
          />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
}

export default SelectPlan;

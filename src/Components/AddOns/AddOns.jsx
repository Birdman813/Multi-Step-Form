import React, { useEffect, useState } from "react";
import "./AddOns.css";

function AddOns({
  onlineService,
  setOnlineService,
  largerStorage,
  setLargerStorage,
  customizable,
  setCustomizable,
  monthly,
}) {
  useEffect(() => {
    setOnlineService(onlineService);
    setCustomizable(customizable);
    setLargerStorage(largerStorage);
  }, [onlineService, largerStorage, customizable]);
  return (
    <div className="plan-container">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-on-section">
        <div
          className={`add-on-container ${
            onlineService ? "checked-add-on" : ""
          }`}
        >
          <div className="add-on-input-container">
            <input
              type="checkbox"
              value={onlineService}
              checked={onlineService}
              onChange={(e) => setOnlineService(e.target.checked)}
              id="online-service"
            />
            <span className="add-on-name">
              Online Service <br />{" "}
              <span className="add-on-info">Access to multiplayer games</span>
            </span>
          </div>
          <span className="add-on-price">{monthly ? "+$1/mo" : "+$10/yr"}</span>
        </div>
        <div
          className={`add-on-container ${
            largerStorage ? "checked-add-on" : ""
          }`}
        >
          <div className="add-on-input-container">
            <input
              type="checkbox"
              name=""
              value={largerStorage}
              checked={largerStorage}
              onChange={(e) => setLargerStorage(e.target.checked)}
              id="larger-storage"
            />
            <span className="add-on-name">
              Larger storage
              <br />{" "}
              <span className="add-on-info">Extra 1TB of cloud save</span>
            </span>
          </div>
          <span className="add-on-price">{monthly ? "+$2/mo" : "+$20/yr"}</span>
        </div>
        <div
          className={`add-on-container ${customizable ? "checked-add-on" : ""}`}
        >
          <div className="add-on-input-container">
            <input
              type="checkbox"
              name=""
              value={customizable}
              checked={customizable}
              onChange={(e) => setCustomizable(e.target.checked)}
              id="customizable-profile"
            />
            <span className="add-on-name">
              Customizable profile
              <br />{" "}
              <span className="add-on-info">Custom theme on your profile</span>
            </span>
          </div>
          <span className="add-on-price">{monthly ? "+$2/mo" : "+$20/yr"}</span>
        </div>
      </div>
    </div>
  );
}

export default AddOns;

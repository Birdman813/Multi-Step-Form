import React, { useState } from "react";
import "./Form.css";

function Form({ handleInputChange, userInfo, formErrors, nextStepHandler }) {
  return (
    <form onSubmit={nextStepHandler}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="input-container">
        <div>
          <div className="error-container">
            <label htmlFor="name">Name</label>
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </div>
          <input
            type="text"
            id="name"
            onChange={(e) => handleInputChange(e, "name")}
            value={userInfo.name}
            className={`${formErrors.name ? "error-input" : ""}`}
          />
        </div>
        <div>
          <div className="error-container">
            <label htmlFor="email">Email Address</label>
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <input
            type="text"
            id="email"
            onChange={(e) => handleInputChange(e, "email")}
            value={userInfo.email}
            className={`${formErrors.email ? "error-input" : ""}`}
          />
        </div>
        <div>
          <div className="error-container">
            <label htmlFor="number">Phone Number</label>
            {formErrors.number && (
              <span className="error">{formErrors.number}</span>
            )}
          </div>
          <input
            type="number"
            id="number"
            onChange={(e) => handleInputChange(e, "number")}
            value={userInfo.number}
            className={`${formErrors.number ? "error-input" : ""}`}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;

import React from "react";
import messageIcon from "../../assets/icon-thank-you.svg";
import "./Message.css";

function Message() {
  return (
    <div className="message-container">
      <img src={messageIcon} alt="Thank You" />
      <div>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Message;

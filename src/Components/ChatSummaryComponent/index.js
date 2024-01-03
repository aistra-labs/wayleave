import React from "react";
import images from "../images/images";
import "../ChatSummaryComponent/chatSummaryComponent.css";

const ChatSummaryComponent = ({ summary }) => {
  return (
    <div className="chat-summary-box">
      <div className="chat-summary-heading">
        <img
          className="summary-icon"
          src={images["chat-summary.svg"]}
          loading="lazy"
          alt="building"
        />{" "}
        <p className="summary-text">Wayleave negotiation summary</p>
      </div>
      <ul className="chat-summary-wrapper">
        {summary &&
          summary.map((detail, index) => <li key={index}>{detail}</li>)}
      </ul>
    </div>
  );
};
export default ChatSummaryComponent;

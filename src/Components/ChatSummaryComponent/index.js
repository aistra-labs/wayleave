import React from "react";
import images from "../images/images";
import "../ChatSummaryComponent/chatSummaryComponent.css";

const ChatSummaryComponent = ({ summary }) => {
  return (
    <div className="chat-summary-box">
      <div className="chat-summary-heading">
        <img src={images["chat-summary.svg"]} loading="lazy" alt="building" />{" "}
        <p>Wayleave negotiation summary</p>
      </div>
      <ul className="chat-summary-wrapper">
        {summary && summary.map((detail) => <li>{detail}</li>)}
      </ul>
    </div>
  );
};
export default ChatSummaryComponent;

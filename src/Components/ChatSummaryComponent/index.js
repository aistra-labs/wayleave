import React from "react";
import images from "../images/images";
import "../ChatSummaryComponent/chatSummaryComponent.css";

const ChatSummaryComponent = ({ summary }) => {
  return (
    <div className="chat-summary-box">
      <div className="chat-summary-heading">
        <img src={images["chat-summary.svg"]} loading="lazy" alt="building" />{" "}
        <p>Chat History Summary</p>
      </div>
      {/* <div className="chat-summary-wrapper"> */}
      <ul className="chat-summary-wrapper">
        {summary && summary.map((detail) => <li>{detail}</li>)}
      </ul>
    </div>
    // </div>
  );
};
export default ChatSummaryComponent;

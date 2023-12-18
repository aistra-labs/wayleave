import React, { memo } from "react";
import "../WayLeaveDetails/wayLeaveDetails.css";
import WayLeaveComponent from "../../Components/WayLeaveDetailsComponent";
import ChatComponent from "../../Components/ChatComponent";

const WayLeaveDetailsContainer = () => {
  return (
    <div className="wayleave-container">
      <div className="wayleave-details-container">
        <WayLeaveComponent />
      </div>
      <div className="wayleave-chat-container">{<ChatComponent />}</div>
    </div>
  );
};
export default memo(WayLeaveDetailsContainer);

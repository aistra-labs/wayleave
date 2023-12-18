import React, { memo, useState, useEffect } from "react";
import "../WayLeaveDetails/wayLeaveDetails.css";
import WayLeaveComponent from "../../Components/WayLeaveDetailsComponent";
import ChatComponent from "../../Components/ChatComponent";
import { useParams } from "react-router-dom";
import apiRequest from "../../Components/api/api";

const WayLeaveDetailsContainer = () => {
  const { id } = useParams();
  const [wayLeave, setWayLeave] = useState({});
  const [messages, setMessages] = useState([]);
  const [wayLeaveId, setWayLeaveId] = useState("");
  const [landLordId, setLandLordId] = useState("");
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    getWayLeaveDeatails();
  }, []);

  const getWayLeaveDeatails = async () => {
    try {
      const url = "get?wayLeaveId=" + id;
      const result = await apiRequest(url, "GET");
      setWayLeave(result && result.data);
      setWayLeaveId(result && result.data?.wayLeaveId);
      setLandLordId(result && result.data?.landLordId);
      getChatDetails(result && result.data?.wayLeaveId);
    } catch (error) {
      // Handle error
      console.error("Error in POST request:", error);
    }
  };

  const getChatDetails = async (id) => {
    try {
      const url = "conversations?wayLeaveId=" + id;
      const result = await apiRequest(url, "GET");
      setMessages(result && result.data.conversations);
      setSummary(result && result.data.chatSummary);
    } catch (error) {
      // Handle error
      console.error("Error in POST request:", error);
    }
  };
  const handleRefesh = () => {
    getChatDetails(id);
  };

  return (
    <div className="wayleave-container">
      <div className="wayleave-details-container">
        <WayLeaveComponent wayLeave={wayLeave} summary={summary} />
      </div>
      <div className="wayleave-chat-container">
        {
          <ChatComponent
            messageData={messages}
            wayLeaveId={wayLeaveId}
            landLordId={landLordId}
            refresh={handleRefesh}
          />
        }
      </div>
    </div>
  );
};
export default memo(WayLeaveDetailsContainer);

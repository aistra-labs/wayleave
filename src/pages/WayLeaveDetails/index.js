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
  const [landLordName, setLandLordName] = useState("");
  const [landLordId, setLandLordId] = useState(null);
  const [summary, setSummary] = useState([]);
  const [sourceArray, setSourceArray] = useState([]); // State for storing API response
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    getWayLeaveDeatails();
  }, []);

  useEffect(() => {
    // if (sourceArray.length > 4) {
    let time = 500;
    if (sourceArray.length === 3) {
      time = 500;
    } else if (sourceArray.length === 2) {
      time = 20000;
    } else if (sourceArray.length === 1) {
      time = 10000;
    } else {
      time = 10000;
    }
    const intervalId = setInterval(() => {
      if (sourceArray.length > 0) {
        let poppedObject = sourceArray.shift();
        setMessages((prevDestArray) => [...prevDestArray, poppedObject]);
      } else {
        clearInterval(intervalId); // Clear the interval when sourceArray is empty
      }
    }, time);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [sourceArray, messages]);

  const getWayLeaveDeatails = async () => {
    try {
      const url = "get?wayLeaveId=" + id;
      const result = await apiRequest(url, "GET");
      setWayLeave(result && result.data);
      setWayLeaveId(result && result.data?.wayLeaveId);
      setLandLordId(result && result.data?.landLordId);
      setLandLordName(result && result.data?.landLordName);
      if (!landLordId) {
        getChatDetails(result && result.data?.wayLeaveId);
      }
      setSummary(result && result.data.chatSummary);
    } catch (error) {
      // Handle error
      console.error("Error in POST request:", error);
    }
  };

  const getChatDetails = async (id) => {
    try {
      const url = "conversations?wayLeaveId=" + id;
      const result = await apiRequest(url, "GET");
      if (result.data.conversations.length <= 3) {
        setSourceArray(result.data.conversations);
      } else {
        setMessages(result.data.conversations);
      }
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleRefesh = () => {
    getWayLeaveDeatails(wayLeaveId);
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
            handleRefesh={handleRefesh}
            landLordName={landLordName}
          />
        }
      </div>
    </div>
  );
};
export default memo(WayLeaveDetailsContainer);

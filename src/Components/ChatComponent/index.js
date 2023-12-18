import Header from "../HeaderComponent";
import "../ChatComponent/chatComponent.css";
import React, { useState, useEffect, useRef } from "react";
import images from "../images/images";
import apiRequest from "../api/api";

const ChatComponent = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const scrollToLastMessage = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      if (scrollHeight > clientHeight) {
        chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
      }
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    console.log(input, "inputinput");
    try {
      const url = "conversation";
      const data = { wayLeaveId: 1, text: input, landLordId: 1 };
      const result = await apiRequest(url, "POST", data);
      const userMessage = result.data;
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
    } catch (error) {
      // Handle error
      console.error("Error in POST request:", error);
    }
  };

  useEffect(() => {
    getChatDetails();
  }, []);

  const getChatDetails = async () => {
    try {
      const url = "conversations?wayLeaveId=1";
      const result = await apiRequest(url, "GET");
      setMessages(result && result.data.conversations);
    } catch (error) {
      // Handle error
      console.error("Error in POST request:", error);
    }
  };

  return (
    <div className="wayleave-chat-wrapper">
      <div>
        <Header />
      </div>
      <div className="chatbot-container">
        <div className="chatbot-messages" ref={chatContainerRef}>
          {messages &&
            messages.map((message, index) => (
              <div className="chatbot-wrapper">
                <div className={message.sender !== "Bot" ? "chat-userimg" : ""}>
                  <img
                    src={
                      images[message.sender !== "Bot" ? "CS.svg" : "bot.svg"]
                    }
                    loading="lazy"
                    alt="bot"
                  />
                </div>
                <div
                  key={index}
                  className={`message ${
                    message.sender !== "Bot" ? "user-message" : "ai-message"
                  }`}
                >
                  {message.text}
                  <div
                    className={
                      message.sender !== "Bot" ? "chat-time" : "chat-time-ai"
                    }
                  >
                    {message.sendTime}
                  </div>
                </div>
              </div>
            ))}
          <div className="refresh" onClick={() => getChatDetails()}>
            Refresh
          </div>
        </div>

        <form className="chatbot-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">
            {" "}
            <img src={images["attach.svg"]} loading="lazy" alt="attach" />
          </button>
          <button type="submit">
            {" "}
            <img src={images["send.svg"]} loading="lazy" alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatComponent;

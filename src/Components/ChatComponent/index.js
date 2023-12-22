import Header from "../HeaderComponent";
import "../ChatComponent/chatComponent.css";
import React, { useState, useEffect, useRef } from "react";
import images from "../images/images";
import apiRequest from "../api/api";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    let intervalId;

    if (currentIndex < text.length) {
      intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 20); // Adjust the interval as needed
    }

    return () => clearInterval(intervalId);
  }, [text, currentIndex]);

  useEffect(() => {
    scrollToLastMessage();
  }, [displayText]);

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to sanitize HTML content
  const createMarkup = () => {
    return { __html: displayText };
  };

  return <div ref={lastMessageRef} dangerouslySetInnerHTML={createMarkup()} />;
};

const ChatComponent = ({
  messageData,
  wayLeaveId,
  landLordId,
  handleRefesh,
  landLordName,
}) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(messageData);
  const chatContainerRef = useRef(null);
  const [isloading, setIsloading] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [botTimerId, setBotTimerId] = useState(null);
  const scrollToLastMessage = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      if (scrollHeight > clientHeight) {
        chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
      }
    }
  };
  const addBotlastMessage = () => {
    const botMessageData = {
      sendTime: formattedDate,
      sender: "Bot",
      text: "If you find the terms acceptable, kindly sign the wayleave agreement thanks!",
    };
    clearTimeout(botTimerId);
    setBotTimerId(null);
    const newTimerId = setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessageData]);
      scrollToLastMessage();
    }, 40000);

    // Update botTimerId state to store the new timer ID
    setBotTimerId(newTimerId);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const getName = (fullName) => {
    const words = fullName.split(" ");

    // Extract the initials
    const initials = words
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();

    return initials;
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [messages, messageData]);

  useEffect(() => {
    setMessages(messageData);
  }, [messageData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      setShowTyping(false);
      const url = "conversation";
      const data = {
        wayLeaveId: wayLeaveId,
        text: input,
        landLordId: landLordId,
      };
      setInput("");
      const inputText = {
        text: input,
        sender: landLordName,
        sendTime: formattedDate,
      };
      addBotlastMessage();
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, inputText]);
        setIsloading(true);
      }, 100);

      const result = await apiRequest(url, "POST", data);
      const userMessage = result.data;
      setIsloading(false);
      setTimeout(() => {
        refreshChat();
        setShowTyping(true);
        setMessages((prevMessages) => [...prevMessages, userMessage.response]);
        scrollToLastMessage();
      }, 10);
      // addBotlastMessage();
    } catch (error) {
      // Handle error
      console.error("Error in POST request:", error);
    }
  };

  const getChatDetails = async (wayLeaveId) => {
    try {
      const url = "conversations?wayLeaveId=" + wayLeaveId;
      const result = await apiRequest(url, "GET");
      setMessages(result && result.data.conversations);
    } catch (error) {
      // Handle error
      console.error("Error in Get request:", error);
    }
  };

  const refreshChat = () => {
    handleRefesh();
  };

  return (
    <div className="wayleave-chat-wrapper">
      <div>
        <Header title={"Aistra Wayleave Bot"} />
      </div>
      <div className="chatbot-container">
        <div className="chatbot-messages" ref={chatContainerRef}>
          {messages &&
            messages.map((message, index) => (
              <div className="chatbot-wrapper">
                <div
                  className={
                    message.sender === "Bot" ? "chat-userimg" : "chat-user"
                  }
                >
                  {message.sender === "Bot" ? (
                    <div className="bot-img">
                      {" "}
                      <img
                        src={images["bot.png"]}
                        loading="lazy"
                        alt="bot"
                      />{" "}
                    </div>
                  ) : (
                    <div className="sender-name">{getName(message.sender)}</div>
                  )}
                </div>
                <div
                  key={index}
                  className={`message ${
                    message.sender !== "Bot" ? "user-message" : "ai-message"
                  }`}
                >
                  {showTyping && index === messages.length - 1 ? (
                    <Typewriter text={message.text} delay={10} />
                  ) : messages.length < 4 ? (
                    <Typewriter text={message.text} delay={10} />
                  ) : message.sender !== "bot" ? (
                    <div dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    <Typewriter text={message.text} delay={10} />
                  )}

                  <div />
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
          {isloading && (
            <div class="chat-bubble">
              <div class="typing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          )}

          <div className="refresh" onClick={() => getChatDetails(wayLeaveId)}>
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

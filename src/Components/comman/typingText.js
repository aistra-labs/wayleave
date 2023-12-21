import React, { useState, useEffect } from "react";

const TypingText = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(
        (prevText) => prevText + messages[currentMessageIndex].text[index]
      );
      index += 1;
      if (index === messages[currentMessageIndex].text.length) {
        clearInterval(intervalId);

        // Move to the next message after a delay (e.g., 1000ms)
        setTimeout(() => {
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setDisplayedText("");
        }, 1000);
      }
    }, messages[currentMessageIndex].speed || 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [messages, currentMessageIndex]);

  return <span>{displayedText}</span>;
};

const ChatApp = () => {
  const chatMessages = [
    { text: "Hello, how are you?" },
    { text: "I'm doing well, thank you!", speed: 100 },
    // Add more messages as needed
  ];

  return (
    <div>
      <p>
        User: <TypingText messages={chatMessages} />
      </p>
    </div>
  );
};

export default ChatApp;

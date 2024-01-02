import React, { useState, useEffect } from "react";
import "./barStackComponent.css";
import Tooltip from "@mui/material/Tooltip";
const WordCloud = ({ data }) => {
  const [columnWidth, setColumnWidth] = useState(200);
  const [wordStyles, setWordStyles] = useState([]);

  useEffect(() => {
    const calculateCollisions = (newWord, existingWords) => {
      const margin = 20; // Gap between words

      for (const existingWord of existingWords) {
        const dx = newWord.left - existingWord.left;
        const dy = newWord.top - existingWord.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < margin) {
          // Collision detected, adjust position
          newWord.top += margin;
          calculateCollisions(newWord, existingWords); // Check again with the adjusted position
        }
      }
    };
    data.sort((a, b) => b.value - a.value); // Sort by value in descending order
    const centerIndex = Math.floor(data.length / 2);

    // Rearrange the array with the highest value in the center
    const sortedArray = [
      data[centerIndex],
      ...data.slice(centerIndex + 1),
      ...data.slice(0, centerIndex),
    ];
    // Parse the array and generate styles based on the value property
    const styles = sortedArray.map((item) => {
      const fontSize = `${item.value}px`;
      const top = Math.random() * 300;
      const color = item.color;

      return {
        text: item.text,
        fontSize,
        top,
        color,
        size: item.text.length + 20 + item.value * 4,
      };
    });

    // Adjust positions to prevent overlapping
    styles.forEach((wordObj, index) => {
      calculateCollisions(wordObj, styles.slice(0, index));
    });

    setWordStyles(styles);
  }, [data]);

  useEffect(() => {}, [data]);

  return (
    <div
      className="word-cloud"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: `repeat(auto-fill, minmax(${columnWidth}px, 1fr))`,
      }}
    >
      {wordStyles.map((wordObj, index) => (
        <div
          key={index}
          className="word-cloud-item"
          style={{
            fontSize: wordObj.fontSize,
            top: `${wordObj.top}px`,
            width:
              Math.floor(Math.random() * 8) === index
                ? `100%`
                : `${wordObj.size}px `,
            gridColumnEnd: `span ${wordObj.columns}`, // Span the number of columns
            padding: "6px",
            fontWeight: 800,
            color: wordObj.color,
            textAlign: "center",
            transition: "opacity 0.5s ease-in-out", // Add opacity transition
            opacity: 1, // Initial opacity
          }}
        >
          <Tooltip title={wordObj.text} placement="top-start">
            {wordObj.text}
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

const CloudChart = () => {
  const sampleData = [
    {
      text: "Liability limitation & exclusion of indirect losses",
      value: 14,
      color: "#FA9C63",
    },
    {
      text: "LSS's Termination Rights",
      value: 12,
      color: "#68B5C8",
    },
    {
      text: "Right to interfere & obstruct property access",
      value: 17,
      color: "#EB8597",
    },
    {
      text: "Right to install & maintain apparatus",
      value: 14,
      color: "#239A98",
    },
    {
      text: "Notice for work affecting apparatus",
      value: 17,
      color: "#F5B0A3",
    },
    {
      text: "Obligation to cut back trees/vegetation",
      value: 16,
      color: "#F1BA00",
    },
    {
      text: "Restriction on agreement alteration",
      value: 20,
      color: "#83C0A8",
    },
  ];

  return (
    <div className="chart-small-wrapper ">
      <div className="chart-info">
        <div className="chat-title">Most Negotiated Clauses</div>
        <div className="chat-details"></div>
      </div>
      <WordCloud data={sampleData} />
      <div className="chart-observation">
        <b> Observation : </b> Criticality Levels 2,3 & 5 are ahead of schedule.
        Criticality 1 & 4 are behind schedule by 1.8 and 4.2 days respectively.
      </div>
    </div>
  );
};
export default CloudChart;

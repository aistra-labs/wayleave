import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const apiData = [
  {
    label: "Series A",
    data: [30, 10, 40, 50, 40, 50],
    color: "#239A98",
  },
  {
    label: "Series B",
    data: [10, 4, 20, 1, 50, 40],
    color: "#68B5C8",
  },
  // Add more series as needed
];

const xAxis = {
  scaleType: "band",
  data: [
    "01 Nov 23",
    "02 Nov 23",
    "03 Nov 23",
    "04 Nov 23",
    "05 Nov 23",
    "06 Nov 23",
  ],
  line: {
    visible: true, // Show the X-axis line
  },
};

const yAxis = {
  scaleType: "linear", // Use linear scale for percentages
  data: [0, 10, 25, 50, 100], // Adjust based on your percentage range
  tickFormatter: (value) => `${value}%`, // Format ticks as percentages
  line: {
    visible: false, // Show the X-axis line
  },
};

export default function BarStackingComponent() {
  return (
    <BarChart
      height={500}
      xAxis={[
        {
          ...xAxis,
          tickLabelStyle: {
            angle: 45,
            dominantBaseline: "hanging",
            textAnchor: "start",
          },
          labelStyle: {
            transform: "translateY(15px)",
          },
        },
      ]}
      yAxis={[
        {
          ...yAxis,
          grid: {
            line: {
              visible: true, // Make sure grid lines are visible
              style: { stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 },
            },
          },
        },
      ]}
      series={apiData.map((item, index) => ({
        ...item,
        stack: "total",
      }))}
    />
  );
}

import * as React from "react";
import ReactApexChart from "react-apexcharts";
import images from "../images/images";
import "./barStackComponent.css";
const MultiBarARCStackComponent = () => {
  const apiData = {
    series: [
      {
        name: "1",
        data: [
          0, 5, 10, 20, 30, 40, 45, 50, 60, 65, 70, 80, 85, 90, 94, 90, 94,
        ],
        color: "#239A98",
      },
      {
        name: "2",
        data: [
          0, 5, 10, 20, 30, 40, 45, 50, 60, 65, 70, 80, 85, 90, 94, 90, 94,
        ],
        color: "#68B5C8",
      },
      {
        name: "3",
        data: [
          0, 5, 10, 20, 30, 40, 45, 50, 60, 65, 70, 80, 85, 90, 94, 90, 94,
        ],
        color: "#FDC400",
      },
      {
        name: "4",
        data: [
          3, 5, 10, 20, 30, 40, 45, 50, 60, 65, 70, 80, 85, 90, 94, 90, 94,
        ],
        color: "#EE742B",
      },
      {
        name: "5",
        data: [
          1, 5, 10, 20, 30, 40, 45, 50, 60, 65, 70, 80, 85, 90, 94, 90, 94,
        ],
        color: "#D9415C",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 550,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "top",
              offsetX: -10,
              offsetY: 10,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          enabled: false,
          dataLabels: {
            total: {
              // enabled: true,
              style: {
                fontSize: "8px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        // type: "datetime",
        categories: [
          "01 Nov 2022",
          "02 Nov 2022",
          "03 Nov 2022",
          "04 Nov 2022",
          "05 Nov 2022",
          "06 Nov 2022",
          "07 Nov 2022",
          "08 Nov 2022",
          "09 Nov 2022",
          "10 Nov 2022",
          "11 Nov 2022",
          "12 Nov 2022",
          "13 Nov 2022",
          "14 Nov 2022",
          "15 Nov 2022",
          "16 Nov 2022",
          "17 Nov 2022",
          "18 Nov 2022",
          "19 Nov 2022",
          "20 Nov 2022",
        ],
        labels: {
          rotate: -45,
          style: {
            fontSize: "10px",
            fontWeight: 500, // Adjust the font size as needed
          },
        },

        tickPlacement: "on",
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val;
          },
          style: {
            // fontSize: "12px",
          },
        },
        tickAmount: 10,
      },

      legend: {
        position: "top",
        offsetY: 10,
        fontSize: "10px", // Adjust the font size as needed
        fontWeight: "bold", // Adjust the font weight as needed
        markers: {
          width: 10,
          height: 10,
          background: "none",
          borderRadius: 30,
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div className="chart-wrapper">
      <div className="chart-info">
        <div className="chat-title">
          Acquisition Rate by Criticality (Route ID: 3284)
        </div>
        <div className="chat-details"></div>
      </div>
      <ReactApexChart
        options={apiData.options}
        series={apiData.series}
        type="bar"
        height={450}
        // width={200}
      />
      <div className="chart-observation">
        <b> Observation : </b> Criticality Levels 2,3 & 5 are ahead of schedule.
        Criticality 1 & 4 are behind schedule by 1.8 and 4.2 days respectively.
      </div>
    </div>
  );
};
export default MultiBarARCStackComponent;

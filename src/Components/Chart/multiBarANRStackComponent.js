import * as React from "react";
import ReactApexChart from "react-apexcharts";
import images from "../images/images";
import "./barStackComponent.css";
const MultiBarANRStackComponent = () => {
  const apiData = {
    series: [
      {
        name: "Contracted",
        data: [10, 50, 100, 250, 150, 100],
        color: "#EE742B",
      },
      {
        name: "Unreachable",
        data: [50, 100, 150, 250, 140, 130],
        color: "#FFBF00",
      },
      {
        name: "Contract Refused",
        data: [10, 150, 100, 400, 100, 100],
        color: "#93C3B0",
      },
      {
        name: "Letter 1 Dispatched - Action Awaited",
        data: [100, 150, 200, 300, 200, 100],
        color: "#68B5C8",
      },
      {
        name: "Letter 2 Dispatched - Action Awaited",
        data: [50, 150, 200, 200, 150, 200],
        color: "#FF7A91",
      },
      {
        name: "Unreachable -2",
        data: [150, 200, 300, 300, 100, 200],
        color: "#239A98",
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
        categories: ["R6248", "R8924", "R3846", "R7181", "R3522", "R3260"],
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
        },
        tickAmount: 4,
        max: 2500,
      },

      legend: {
        position: "top",
        offsetY: 10,
        fontSize: "10px",
        markers: {
          width: 10,
          height: 10,
          borderRadius: "30px",
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div className="chart-small-wrapper ">
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
        height={350}
      />
      <div className="chart-observation">
        <b> Observation : </b> Criticality Levels 2,3 & 5 are ahead of schedule.
        Criticality 1 & 4 are behind schedule by 1.8 and 4.2 days respectively.
      </div>
    </div>
  );
};
export default MultiBarANRStackComponent;

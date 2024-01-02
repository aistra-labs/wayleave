import * as React from "react";
import ReactApexChart from "react-apexcharts";
import images from "../images/images";
import "./barStackComponent.css";
const DoubleBarStackComponent = () => {
  const apiData = {
    series: [
      {
        name: "Estimated Remaining Acquisition",
        data: [10, 23, 50, 10, 30, 40, 20, 50, 60, 65],
        color: "#239A98",
      },
      {
        name: "Current Level of Acquisition",
        data: [40, 33, 50, 20, 30, 40, 45, 50, 30, 65],
        color: "#EE742B",
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
          "wh966",
          "wh934",
          "wh945",
          "wh923",
          "wh963",
          "wh965",
          "wh967",
          "wh961",
          "wh960",
          "wh966",
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
        rotate: -45,
        labels: {
          show: true,
          formatter: function (val) {
            return val;
          },
        },
        tickAmount: 5,
        // max: 150,
      },

      legend: {
        position: "top",
        offsetY: 10,
        fontSize: "10px", // Adjust the font size as needed
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
          Wayleave Handler Performance (Dec'23, Criticality: 4,5)
        </div>
        <div className="chat-details"></div>
      </div>
      <ReactApexChart
        options={apiData.options}
        series={apiData.series}
        type="bar"
        height={450}
      />
      <div className="chart-observation">
        <b>Observation : </b> Criticality Levels 2,3 & 5 are ahead of schedule.
        Criticality 1 & 4 are behind schedule by 1.8 and 4.2 days respectively.
      </div>
    </div>
  );
};
export default DoubleBarStackComponent;

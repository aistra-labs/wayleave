import * as React from "react";
import ReactApexChart from "react-apexcharts";
import images from "../images/images";
import "./barStackComponent.css";
const BarStackingComponent = () => {
  const apiData = {
    series: [
      {
        name: "PRODUCT A",
        data: [20, 55, 70, 67, 22],
        color: "#239A98",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
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
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          enabled: false,
          dataLabels: {
            total: {
              // enabled: true,
              style: {
                fontSize: "13px",
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
        categories: [1, 2, 3, 4, 5],
        labels: {
          rotate: -45,
        },
        tickPlacement: "on",
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "%";
          },
        },
        // tickAmount: 6,
        max: 100,
      },

      legend: {
        position: "top",
        offsetY: 10,

        markers: {
          width: 20,
          height: 20,
          background: "none",
          customHTML: function (apiData) {
            return (
              '<div class="ufo-marker"><img src="' +
              images["send.svg"] +
              '" loading="lazy" alt="send" /></div>' +
              apiData
            ); // Custom HTML for the UFO shape with the image
          },
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <div className="chart-small-wrapper">
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
        height={300}
      />
      <div className="chart-observation">
        <b> Observation : </b> Criticality Levels 2,3 & 5 are ahead of schedule.
        Criticality 1 & 4 are behind schedule by 1.8 and 4.2 days respectively.
      </div>
    </div>
  );
};
export default BarStackingComponent;

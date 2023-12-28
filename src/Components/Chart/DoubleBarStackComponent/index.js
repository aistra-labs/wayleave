import * as React from "react";
import ReactApexChart from "react-apexcharts";
import images from "../../images/images";
const BarStackingComponent = () => {
  const apiData = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
        color: "#000",
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      // {
      //   name: "PRODUCT C",
      //   data: [11, 17, 15, 15, 21, 14],
      // },
      // {
      //   name: "PRODUCT D",
      //   data: [21, 7, 25, 13, 22, 8],
      // },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
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
          borderRadius: 10,
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
        categories: [
          "01 Nov 2022",
          "02 Nov 2022",
          "03 Nov 2022",
          "04 Nov 2022",
          "05 Nov 2022",
          "06 Nov 2022",
        ],
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
      },

      legend: {
        position: "top",
        offsetY: 10,
        labels: {
          colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"],
          // Add any other legend label customization options as needed
        },
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
  // const apiData = {
  //   series: [
  //     {
  //       data: [
  //         { x: "New Delhi", y: 218 },
  //         { x: "Kolkata", y: 149 },
  //         // ... other data points ...
  //       ],
  //     },
  //   ],
  //   options: {
  //     legend: {
  //       show: false,
  //     },
  //     chart: {
  //       height: 350,
  //       type: "treemap",
  //     },
  //     title: {
  //       text: "Distibuted Treemap (different color for each cell)",
  //       align: "center",
  //     },
  //     colors: [
  //       "#3B93A5",
  //       "#F7B844",
  //       "#ADD8C7",
  //       "#EC3C65",
  //       "#CDD7B6",
  //       "#C1F666",
  //       "#D43F97",
  //       "#1E5D8C",
  //       "#421243",
  //       "#7F94B0",
  //       "#EF6537",
  //       "#C0ADDB",
  //     ],
  //     plotOptions: {
  //       treemap: {
  //         distributed: true,
  //         enableShades: false,
  //         dataLabels: {
  //           enabled: true,
  //           style: {
  //             fontSize: "18px",
  //           },
  //           formatter: function (text, op) {
  //             return [text, op.value];
  //           },
  //           offsetY: -4,

  //           // formatter: function (val, opt) {
  //           //   // Dynamically adjust font size and color based on the size of each cell
  //           //   const fontSize = 10 + opt.point.value / 20;
  //           //   const fontColor = "#FF0000"; // Replace with the desired font color
  //           //   return {
  //           //     html:
  //           //       '<span style="font-size: ' +
  //           //       fontSize +
  //           //       "px; color: " +
  //           //       fontColor +
  //           //       '">' +
  //           //       // val +
  //           //       "</span>",
  //           //     style: {
  //           //       fontSize: "12px !important", // Default font size for the text in the treemap cells
  //           //       color: "#000000", // Default font color for the text in the treemap cells
  //           //     },
  //           //   };
  //           // },
  //         },
  //       },
  //     },
  //   },
  // };
  // const apiData = {
  //   series: [
  //     {
  //       data: [
  //         {
  //           x: "INTC",
  //           y: 1.2,
  //         },
  //         {
  //           x: "GS",
  //           y: 0.4,
  //         },
  //         {
  //           x: "CVX",
  //           y: -1.4,
  //         },
  //         {
  //           x: "GE",
  //           y: 2.7,
  //         },
  //         {
  //           x: "CAT",
  //           y: -0.3,
  //         },
  //         {
  //           x: "RTX",
  //           y: 5.1,
  //         },
  //         {
  //           x: "CSCO",
  //           y: -2.3,
  //         },
  //         {
  //           x: "JNJ",
  //           y: 2.1,
  //         },
  //         {
  //           x: "PG",
  //           y: 0.3,
  //         },
  //         {
  //           x: "TRV",
  //           y: 0.12,
  //         },
  //         {
  //           x: "MMM",
  //           y: -2.31,
  //         },
  //         {
  //           x: "NKE",
  //           y: 3.98,
  //         },
  //         {
  //           x: "IYT",
  //           y: 1.67,
  //         },
  //       ],
  //     },
  //   ],
  //   options: {
  //     legend: {
  //       show: false,
  //     },
  //     chart: {
  //       height: 350,
  //       type: "treemap",
  //     },
  //     title: {
  //       text: "Treemap with Color scale",
  //     },
  //     dataLabels: {
  //       enabled: true,
  //       style: {
  //         fontSize: "18px",
  //         color: "red",
  //       },
  //       formatter: function (text, opt) {
  //         const value = opt.value;
  //         return text;
  //       },
  //       offsetY: -4,
  //     },
  //     plotOptions: {
  //       treemap: {
  //         enableShades: true,
  //         shadeIntensity: 0.5,
  //         reverseNegativeShade: true,
  //         colorScale: {
  //           ranges: [
  //             {
  //               from: -6,
  //               to: 0,
  //               color: "#CD363A",
  //             },
  //             {
  //               from: 0.001,
  //               to: 6,
  //               color: "#52B12C",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // };

  return (
    <ReactApexChart
      options={apiData.options}
      series={apiData.series}
      type="bar"
      height={350}
    />
  );
};
export default BarStackingComponent;

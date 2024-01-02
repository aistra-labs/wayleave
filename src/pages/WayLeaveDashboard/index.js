import React from "react";
import BarStackingComponent from "../../Components/Chart/barStackComponent";
import "../WayLeaveDashboard/wayleaveDashboard.css";
import MultiBarARCStackComponent from "../../Components/Chart/multiBarARCStackComponent";
import MultiBarANRStackComponent from "../../Components/Chart/multiBarANRStackComponent";
import DoubleBarStackComponent from "../../Components/Chart/doubleBarStackComponent";
import Header from "../../Components/HeaderComponent";
import CloudChart from "../../Components/Chart/cloudChartComponent";
import images from "../../Components/images/images";
const WayLeaveDashboard = () => {
  return (
    <div className="dashboard-container">
      <Header title={"Wayleave Dashboard"} />
      {/* <MultiBarARCStackComponent /> */}
      <div className="upper-box">
        <div className="box-wrapper-75">
          <MultiBarARCStackComponent />
        </div>
        <div className="box-wrapper-25 ">
          <div className="img-wrapper">
            <img className="map-image" src={images["map.png"]} />
          </div>
        </div>
      </div>
      <div className="lower-box">
        <div className="box-wrapper-75">
          <DoubleBarStackComponent />
          <MultiBarANRStackComponent />
          <BarStackingComponent />
        </div>
        <div className="box-wrapper-25  ">
          <CloudChart />
        </div>
      </div>
    </div>
  );
};

export default WayLeaveDashboard;

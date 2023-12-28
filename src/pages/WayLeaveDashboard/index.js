import React from "react";
import BarStackingComponent from "../../Components/Chart/BarStackComponent";

const WayLeaveDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="upper-box">
        <div className="dashboard-char-first-wrapper">
          <BarStackingComponent />
        </div>
        <div className="dashboard-map-wrapper"></div>
      </div>
      <div className="lower-box">
        <div className="dashboard-char-first-wrapper"></div>
        <div className="dashboard-char-first-wrapper"></div>
        <div className="dashboard-char-first-wrapper"></div>
        <div className="dashboard-char-first-wrapper"></div>
      </div>
      <BarStackingComponent />
    </div>
  );
};

export default WayLeaveDashboard;

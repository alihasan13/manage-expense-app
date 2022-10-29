import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPointmaps((datapoints) => (
        <ChartBar />
      ))}
    </div>
  );
};

export default Chart;

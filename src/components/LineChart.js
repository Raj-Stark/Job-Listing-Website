import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data, options }) => {
  return (
    <div className="chart-size">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;

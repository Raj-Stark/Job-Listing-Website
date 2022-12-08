import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";

const BarChart = ({ data, options }) => {
  return (
    <div className="chart-size">
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;

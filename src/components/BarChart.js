import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ data, options }) => {
  return (
    <div className="chart-size">
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;

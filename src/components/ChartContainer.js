import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true);

  const { monthlyApplications: Userdata } = useSelector(
    (store) => store.allJobs
  );

  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({
    labels: Userdata.map((d) => d.date),
    datasets: [
      {
        label: "Job Given Count",
        data: Userdata.map((d) => d.count),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#3B82F6",
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Line Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <LineChart data={chartData} options={options}></LineChart>
      ) : (
        <BarChart data={chartData} options={options}></BarChart>
      )}
    </Wrapper>
  );
};

export default ChartContainer;

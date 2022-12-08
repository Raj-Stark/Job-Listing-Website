import React from "react";
import { useSelector } from "react-redux";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatsItem from "./StatsItem";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const statsArray = [
    {
      title: "Pending Application",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling></FaSuitcaseRolling>,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "Interview Scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck></FaCalendarCheck>,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Jobs Declined",
      count: stats.declined || 0,
      icon: <FaBug></FaBug>,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {statsArray.map((item, index) => {
        return <StatsItem key={index} {...item}></StatsItem>;
      })}
    </Wrapper>
  );
};

export default StatsContainer;

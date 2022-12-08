import React from "react";
import JobsContainer from "../../components/JobsContainer";
import SearchContainer from "../../components/SearchContainer";

const AllJobs = () => {
  return (
    <div>
      <SearchContainer></SearchContainer>
      <JobsContainer></JobsContainer>
    </div>
  );
};

export default AllJobs;

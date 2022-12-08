import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartContainer from "../../components/ChartContainer";
import StatsContainer from "../../components/StatsContainer";
import { showStats } from "../../Features/allJobs/allJobSlice";
import Loading from "../../components/Loading";

const Stats = () => {
  const dispatch = useDispatch();

  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading center></Loading>;
  }
  return (
    <>
      <StatsContainer></StatsContainer>
      {monthlyApplications.length > 0 && <ChartContainer></ChartContainer>}
    </>
  );
};

export default Stats;

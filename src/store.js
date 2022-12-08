import { configureStore } from "@reduxjs/toolkit";
import allJobSlice from "./Features/allJobs/allJobSlice";
import jobSlice from "./Features/job/jobSlice";
import userSlice from "./Features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobSlice,
  },
});

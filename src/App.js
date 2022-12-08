import { Landing, Register, ProtectedRoute } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./Pages/DashBoard/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout></SharedLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats></Stats>}></Route>
          <Route path="all-job" element={<AllJobs></AllJobs>}></Route>
          <Route path="add-job" element={<AddJob></AddJob>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/landing" element={<Landing></Landing>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      {/* <Routes>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes> */}
      <ToastContainer position="top-center"></ToastContainer>
    </BrowserRouter>
  );
}

export default App;

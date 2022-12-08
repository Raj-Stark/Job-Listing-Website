import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh ! Page Not Found</h3>
        <p></p>
        <Link to="/" className="btn btn-hero  " style={{ color: "white" }}>
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;

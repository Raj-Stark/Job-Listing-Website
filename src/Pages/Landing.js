import React from "react";

import headerImage from "../assets/images/blueImage.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            alias debitis aut ratione cupiditate temporibus, assumenda
            repellendus laudantium, beatae consequuntur consequatur harum quos!
            Doloribus, aperiam?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={headerImage} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

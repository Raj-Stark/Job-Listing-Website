import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";

import Logo from "./Logo";
import { useSelector } from "react-redux";

import Navlinks from "./Navlinks";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo></Logo>
          </header>
          <Navlinks></Navlinks>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

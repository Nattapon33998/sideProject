import React from "react";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className="sideBarContainer"
      style={
        isOpen ? { top: "0", opacity: "100%" } : { top: "-100%", opacity: "0" }
      }
    >
      <div className="Icon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <LinkS className="sideBarLink" onClick={toggle}>
            About
          </LinkS>
          <LinkS className="sideBarLink" onClick={toggle}>
            Experiance
          </LinkS>
          <LinkS className="sideBarLink" onClick={toggle}>
            Projects
          </LinkS>
          <LinkS className="sideBarLink" onClick={toggle}>
            Education
          </LinkS>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

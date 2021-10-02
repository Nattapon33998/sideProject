import React from "react";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <LinkS className="navLogo">O@T</LinkS>
        <ul className="navMenu">
          <li className="navItem">
            <LinkS className="navLink">About</LinkS>
          </li>
          <li className="navItem">
            <LinkS className="navLink">Experiance</LinkS>
          </li>
          <li className="navItem">
            <LinkS className="navLink">Projects</LinkS>
          </li>
          <li className="navItem">
            <LinkS className="navLink">Education</LinkS>
          </li>
        </ul>
        <div className="mobileIcon">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

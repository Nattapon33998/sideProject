import React from "react";
import "./Navbar.css";
import { links } from "./data";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <div className="navbar sticky">
      <div className="nav-center">
        {links.map((link) => {
          return (
            <a href={link.url} key={link.id} onClick={handleClick}>
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

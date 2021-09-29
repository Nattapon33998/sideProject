import React from "react";
import "./Navbar.css";
import { links } from "./data";

const Navbar = () => {
  return (
    <div className="navbar sticky">
      <div className="nav-center">
        {links.map((link) => {
          return (
            <a href={link.url} key={link.id}>
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

import Reacr, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="navBar-container">
          <Link to="/" className="navBar-logo">
            Responsive <i class="fas fa-tv"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

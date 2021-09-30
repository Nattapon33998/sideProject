import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
};

export default Home;

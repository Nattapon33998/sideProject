import React, { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
      <h2>Logo</h2>
      <h2>About</h2>
    </div>
  );
}

export default App;

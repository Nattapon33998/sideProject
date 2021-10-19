import React from "react";
import video from "../../video/video.mp4";
import profile from "../../images/profile.jpg";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroContainer" id="Home">
      <div className="heroBackground">
        <video
          className="videoBg"
          playsInline
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
        />
      </div>
      <div className="heroContent">
        <img className="profile" src={profile} />
        <div className="textContent">
          <h1 className="textH1">Nattapon</h1>
          <p className="textP">babababababababababababababababababababababab</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

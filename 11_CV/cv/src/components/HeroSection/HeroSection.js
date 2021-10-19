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
          <h1>Hey there!</h1>
          <h1>I'm Nattapon Sukthaworn</h1>
          <div style={{ display: "flex" }}>
            <h2 style={{ marginTop: "0", marginBottom: "0" }}>Born to be</h2>
            <h2
              style={{
                color: "#01bf71",
                padding: "0px 7px",
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              Developer
            </h2>
          </div>
          <div className="btnWrap">
            <div className className="btnCV">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

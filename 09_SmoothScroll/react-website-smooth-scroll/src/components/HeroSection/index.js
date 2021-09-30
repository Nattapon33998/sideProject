import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello Everyone</HeroH1>
        <HeroP>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup">
            Get stated {hover ? <ArrowForwards /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

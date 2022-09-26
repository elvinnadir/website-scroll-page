import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonEl";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroParag,
  HeroTitle,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroEl";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop deo muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroTitle>Hello World</HeroTitle>
        <HeroParag>
          Sign up for new world today and Create your own place
        </HeroParag>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

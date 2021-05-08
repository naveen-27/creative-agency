import { FC } from "react";
import heroDesktop from "../assets/desktop/image-hero.jpg";
import heroTablet from "../assets/tablet/image-hero.jpg";
import heroMobile from "../assets/mobile/image-hero.jpg";
import Text from "./Text";
import classes from "../styles/Hero.module.css";
import Button from "./Button";

const HeroPara =
  "We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.";

const Hero: FC = () => {
  return (
    <div className={classes.Hero}>
      <div className={classes.HeroText}>
        <Text
          size="l"
          color="dark"
          content="Branding & website design agency"
        />
        <Text size="s" color="dark" content={HeroPara} />
        <Button appearanceClass="red" innerText="Learn More" />
      </div>

      <picture className={classes.HeroImg}>
        <source srcSet={heroDesktop} media="(min-width: 900px)" />
        <source srcSet={heroTablet} media="(min-width: 750px)" />
        <img src={heroMobile} alt="Design Aesthetic" />
      </picture>
    </div>
  );
};

export default Hero;

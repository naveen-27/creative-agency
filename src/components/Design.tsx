import React, { FC } from "react";
import designDesktop from "../assets/desktop/image-strategic.jpg";
import designTablet from "../assets/tablet/image-strategic.jpg";
import designMobile from "../assets/mobile/image-strategic.jpg";
import { ReactComponent as Wave } from "../assets/desktop/bg-pattern-wave-red.svg";
import classes from "../styles/Design.module.css";
import Text from "./Text";
import Button from "./Button";

const designExplained =
  '“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."';

const Design: FC = () => {
  return (
    <div className={classes.Design}>
      <picture>
        <source srcSet={designDesktop} media="(min-width: 900px)" />
        <source srcSet={designTablet} media="(min-width: 750px)" />
        <img
          className={classes.DesignImg}
          src={designMobile}
          alt="Impressive Designs"
        />
      </picture>

      <div className={classes.DesignStrategy}>
        <Wave style={{ zIndex: -1, opacity: 0.85 }} />
        <Text color="light" size="m" content="Design is strategic." />
        <Text color="light" size="s" content={designExplained} />
        <Button appearanceClass="red" innerText="Schedule a Call" />
      </div>
    </div>
  );
};

export default Design;

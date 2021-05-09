import React, { FC } from "react";
import Text from "./Text";
import Button from "./Button";
import { ReactComponent as Wave } from "../assets/desktop/bg-pattern-wave-red.svg";
import classes from "../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={classes.Footer}>
      <Wave className={classes.Wave} />
      <Text
        size="m"
        color="dark"
        content="Let's build something great together."
      />
      <Button appearanceClass="red" innerText="Schedule a Call" />
    </footer>
  );
};

export default Footer;

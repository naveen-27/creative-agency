import React, { FC } from "react";
import { ReactComponent as Logo } from "../assets/desktop/logo.svg";
import Navbar from "./Navbar";
import classes from "../styles/Header.module.css";

const Header: FC = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

import React, { FC } from "react";
import Button from "./Button";
import classes from "../styles/Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.NavList}>
        <li>
          <a className={classes.NavLink} href="/">
            About
          </a>
        </li>
        <li>
          <a className={classes.NavLink} href="/">
            Service
          </a>
        </li>
        <li>
          <a className={classes.NavLink} href="/">
            Projects
          </a>
        </li>
        <li>
          <Button innerText="Schedule a call" appearanceClass="black" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { FC } from "react";
import Button from "./Button";
import classes from "../styles/Navbar.module.css";

interface NavbarProps {
  isMobileNavOpen: boolean;
  isDeviceMobile: boolean;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  const ariaHidden = props.isDeviceMobile
    ? props.isMobileNavOpen
      ? false
      : true
    : false;

  return (
    <nav
      className={`
      ${classes.Navbar} 
      ${props.isMobileNavOpen ? "" : classes.MobileNavCollapsed} 
      ${props.isDeviceMobile ? classes.MobileNav : ""}`}
      aria-hidden={ariaHidden}
    >
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

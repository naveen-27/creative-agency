import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "../assets/desktop/logo.svg";
import { ReactComponent as Ham } from "../assets/mobile/icon-hamburger.svg";
import { ReactComponent as Cross } from "../assets/mobile/icon-cross.svg";
import useResponsiveLayout from "../hooks/useResponsiveLayout";
import classes from "../styles/Header.module.css";

const Header: FC = () => {
  const device = useResponsiveLayout();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const shouldRenderHam = device === "mobile" && !isMobileNavOpen;
  const shouldRenderCross = device === "mobile" && isMobileNavOpen;

  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <Navbar
        isMobileNavOpen={isMobileNavOpen}
        isDeviceMobile={device === "mobile"}
      />
      {shouldRenderHam && <Ham onClick={toggleMenu} />}
      {shouldRenderCross && <Cross onClick={toggleMenu} />}
    </header>
  );
};

export default Header;

import React, { FC } from "react";
import oneDesktop from "../assets/desktop/image-slide-1.jpg";
import oneTablet from "../assets/tablet/image-slide-1.jpg";
import oneMobile from "../assets/mobile/image-slide-1.jpg";
import twoDesktop from "../assets/desktop/image-slide-2.jpg";
import twoTablet from "../assets/tablet/image-slide-2.jpg";
import twoMobile from "../assets/mobile/image-slide-2.jpg";
import threeDesktop from "../assets/desktop/image-slide-3.jpg";
import threeTablet from "../assets/tablet/image-slide-3.jpg";
import threeMobile from "../assets/mobile/image-slide-3.jpg";
import classes from "../styles/ServiceImg.module.css";

interface serviceImgProps {
  title: string;
  projectName: string;
  year: number;
  img: "1" | "2" | "3";
  active?: boolean;
}

const images = {
  "1": {
    desktop: oneDesktop,
    tablet: oneTablet,
    mobile: oneMobile,
  },
  "2": {
    desktop: twoDesktop,
    tablet: twoTablet,
    mobile: twoMobile,
  },
  "3": {
    desktop: threeDesktop,
    tablet: threeTablet,
    mobile: threeMobile,
  },
};

const ServiceImg: FC<serviceImgProps> = (props) => {
  const { img: src, title, projectName, year, active } = props;

  return (
    <div className={`${classes.Picture} ${active ? classes.Active : ""}`}>
      <picture>
        <source srcSet={images[src].desktop} media="(min-width: 900px)" />
        <source srcSet={images[src].tablet} media="(min-width: 750px)" />
        <img
          className={classes.DesignImg}
          src={images[src].mobile}
          alt={title}
        />
      </picture>

      <div className={classes.Info}>
        <h5 className={classes.Title}>{projectName}</h5>
        <p>{year} Project</p>
      </div>
    </div>
  );
};

export default ServiceImg;

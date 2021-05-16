import React, { FC, useState } from "react";
import ServiceImg from "./ServiceImg";
import Text from "./Text";
import { ReactComponent as Next } from "../assets/desktop/icon-arrow-next.svg";
import { ReactComponent as Prev } from "../assets/desktop/icon-arrow-previous.svg";
import classes from "../styles/Services.module.css";

const Services: FC = () => {
  const ServicesList: {
    title: string;
    projectName: string;
    year: number;
    img: "1" | "2" | "3";
  }[] = [
    {
      title: "guidelines",
      projectName: "Lean Product Roadmap",
      year: 2019,
      img: "1",
    },
    {
      title: "merchandise",
      projectName: "New Majestic Hotel",
      year: 2018,
      img: "2",
    },
    {
      title: "web design",
      projectName: "Crypto Dashboard",
      year: 2016,
      img: "3",
    },
  ];

  const [topImg, setTopImg] = useState(0);

  const handleClick = (e: React.SyntheticEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    if (target.dataset.op === "prev") {
      setTopImg(topImg - 1 < 0 ? 0 : topImg - 1);
    } else {
      setTopImg((topImg + 1) % 3);
    }
  };

  return (
    <div className={classes.ServicesContainer}>
      <div className={classes.Images}>
        <div style={{ "--transform": -topImg } as React.CSSProperties}>
          {ServicesList.map((service, idx) => (
            <ServiceImg
              {...service}
              active={topImg === idx}
              key={service.title}
            />
          ))}
        </div>
      </div>

      <div className={classes.ServiceControl}>
        <Text
          color="light"
          size="m"
          content={`Brand naming & ${ServicesList[topImg].title}`}
        />
        <div className={classes.BtnGroup}>
          <button
            aria-label="Previous"
            data-op="prev"
            onClick={handleClick}
            disabled={topImg === 0}
          >
            <Prev />
          </button>
          <button
            aria-label="Next"
            data-op="next"
            onClick={handleClick}
            disabled={topImg === ServicesList.length - 1}
          >
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

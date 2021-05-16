import React, { FC } from "react";
import classes from "../styles/Approach.module.css";
import Text from "./Text";
import KeyPoint from "./KeyPoint";
import useResponsiveLayout from "../hooks/useResponsiveLayout";

const keyPoints = [
  {
    no: "01",
    title: "Brand Strategy",
    point:
      "Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.",
  },
  {
    no: "02",
    title: "Brand Design",
    point:
      "Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.",
  },
  {
    no: "03",
    title: "Web Design",
    point:
      "A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.",
  },
];

const Approach: FC = () => {
  const device = useResponsiveLayout();

  return (
    <div className={classes.Approach}>
      <div className={classes.ApproachText}>
        <Text
          size="m"
          color={device === "mobile" ? "light" : "dark"}
          content="Our approach for creating a winning brand"
        />
      </div>

      <div className={classes.Points}>
        {keyPoints.map((point) => (
          <KeyPoint {...point} key={point.title} />
        ))}
      </div>
    </div>
  );
};

export default Approach;

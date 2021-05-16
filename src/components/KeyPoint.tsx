import React, { FC } from "react";
import classes from "../styles/KeyPoint.module.css";

interface KeyPointProps {
  no: String;
  title: String;
  point: String;
}

const KeyPoint: FC<KeyPointProps> = (props) => {
  const { no, title, point } = props;

  return (
    <div className={classes.KeyPoint}>
      <div className={classes.No}>{no}</div>
      <h3 className={classes.PointTitle}>{title}</h3>
      <p className={classes.Point}>{point}</p>
    </div>
  );
};

export default KeyPoint;

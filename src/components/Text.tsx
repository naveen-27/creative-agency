import React, { FC } from "react";
import classes from "../styles/Text.module.css";

interface TextProps {
  content: string;
  size: "l" | "m" | "s";
  color: "dark" | "light";
}

const Text: FC<TextProps> = (props: TextProps) => {
  let wrapJSX;
  const colorClass = props.color === "dark" ? classes.dark : classes.light;

  switch (props.size) {
    case "l":
      wrapJSX = (
        <h1 className={`${colorClass} ${classes.large}`}>{props.content}</h1>
      );
      break;
    case "m":
      wrapJSX = (
        <h3 className={`${colorClass} ${classes.medium}`}>{props.content}</h3>
      );
      break;
    case "s":
      wrapJSX = (
        <p className={`${colorClass} ${classes.small}`}>{props.content}</p>
      );
  }
  return wrapJSX;
};

export default Text;

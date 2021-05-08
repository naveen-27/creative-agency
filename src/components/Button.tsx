import React, { FC } from "react";
import classes from "../styles/Button.module.css";

interface ButtonProps {
  innerText: string;
  appearanceClass: "red" | "black";
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const customStyles = {
    "--background":
      props.appearanceClass === "red" ? "var(--pale-red)" : "var(--black)",
  } as React.CSSProperties;

  return (
    <button
      style={customStyles}
      className={classes.Button}
      aria-label={props.innerText}
    >
      {props.innerText}
    </button>
  );
};

export default Button;

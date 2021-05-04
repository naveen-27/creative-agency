import React, { FC } from "react";
import classes from "../styles/Button.module.css";

interface ButtonProps {
  innerText: string;
  appearanceClass: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`${classes.Button} ${classes[props.appearanceClass]}`}
      aria-label={props.innerText}
    >
      {props.innerText}
    </button>
  );
};

export default Button;

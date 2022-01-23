import React from "react";
import { createStyles } from "../../helpers/functions";
import styles from "./styles.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className={createStyles("btn btn-primary", styles.buttonMargin)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

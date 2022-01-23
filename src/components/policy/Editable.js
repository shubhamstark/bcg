import React from "react";
import { createStyles } from "../../helpers/functions";
import styles from "./styles.module.css";

export const Editable = ({
  value,
  objectKey,
  label,
  setter,
  editing = false,
  editable = true,
  boolean = false,
}) => {
  if (boolean) {
    console.log(objectKey, value);
  }
  if (!editing | !editable) {
    return (
      <div className={styles.entry}>
        <p className={styles.heading}>{label + ": "}</p>

        <p className={styles.textValue}>{value?.toString()}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.entry}>
        <p className={styles.heading}>{label + ": "}</p>
        {boolean ? (
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={value}
            onChange={(e) => {
              setter((p) => {
                p[objectKey] = !value;
                return { ...p };
              });
            }}
          />
        ) : (
          <input
            type="text"
            className={createStyles("form-control", styles.inputBox)}
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setter((p) => {
                p[objectKey] = !value;
                return { ...p };
              });
            }}
            value={value}
          />
        )}
      </div>
    );
  }
};

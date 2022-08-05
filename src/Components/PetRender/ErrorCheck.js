import React from "react";
import styles from "./PetRender.module.css";

const ErrorCheck = (props) => {
  if (props.pets.length === 0)
    return (
      <h1 className={styles["display-title"]}>Sorry! Couldn't Find a match!</h1>
    );

  return (
    <h1 className={styles["display-title"]}>
      🔻 Scroll down to find a new friend! 🔻
    </h1>
  );
};

export default ErrorCheck;

import React, { Fragment } from "react";
import styles from "./PetRender.module.css";

const ErrorCheck = (props) => {
  return (
    <Fragment>
      {props.isLoading && (
        <h1 className={styles["display-title"]}>Loading...Please Wait</h1>
      )}
      {!props.isLoading && props.pets.length === 0 && (
        <h1 className={styles["display-title"]}>
          Sorry! Couldn't Find a match!
        </h1>
      )}
      {!props.isLoading && props.pets.length > 0 && (
        <h1 className={styles["display-title"]}>
          🔻 Scroll down to find a new friend! 🔻
        </h1>
      )}
    </Fragment>
  );
};

export default ErrorCheck;

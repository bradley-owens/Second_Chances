import React, { Fragment } from "react";
import PetDisplayCard from "../PetDispayCard/PetDisplayCard";
import ErrorCheck from "./ErrorCheck";
import styles from "../PetRender/PetRender.module.css";

const PetRender = (props) => {
  const userPetRequest = props.onSaveAnimalData;
  const apiPetRequest = props.onSaveApiAnimals;

  const petFilter = {
    type: userPetRequest.type,
    gender: userPetRequest.age,
    age: userPetRequest.age,
  };

  const filtered = apiPetRequest.filter((el) => {
    return el.species == petFilter.type;
  });

  if (props.onSaveFormSubmission === true) {
    return (
      <Fragment>
        <ErrorCheck pets={filtered} />
        <div className={styles.display}>
          <PetDisplayCard pets={filtered} />
        </div>
      </Fragment>
    );
  }
  return null;
};

export default PetRender;

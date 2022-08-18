import React, { Fragment, useState } from "react";
import PetDisplayCard from "../PetDispayCard/PetDisplayCard";
import ErrorCheck from "./ErrorCheck";
import styles from "../PetRender/PetRender.module.css";

const PetRender = (props) => {
  const userPetRequest = props.onSaveAnimalData;
  const apiPetRequest = props.onSaveApiAnimals;

  // console.log(apiPetRequest);
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
      <div className={styles.centre}>
        <ErrorCheck pets={filtered} />
        <div className={styles.display}>
          <PetDisplayCard onClickedPet={props.onClickedPet} pets={filtered} />
        </div>
      </div>
    );
  }
  return null;
};

export default PetRender;

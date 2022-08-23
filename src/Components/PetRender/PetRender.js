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
    gender: userPetRequest.gender,
    age: userPetRequest.age,
  };

  const filtered = apiPetRequest.filter((el) => {
    if (el.species == petFilter.type && el.gender == petFilter.gender)
      return el;
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

import React from "react";
import styles from "./PetDisplay.module.css";

const PetDisplay = (props) => {
  const userPetRequest = props.onSaveAnimalData;
  const apiPetRequest = props.onSaveApiAnimals;

  console.log(apiPetRequest);
  const petFilter = {
    type: userPetRequest.type,
    age: userPetRequest.age,
    gender: userPetRequest.age,
    id: userPetRequest.id,
  };

  const display = apiPetRequest.map((pet) => (
    <div className={styles["display-card"]} key={Math.random()}>
      <img
        className={styles["display-card__img"]}
        src={pet.photos[0].small}
      ></img>
      <h2 className={styles["display-card__name"]}>{pet.name}</h2>
      <h3 className={styles["display-card__breed"]}>{pet.breeds.primary}</h3>
      <p className={styles["display-card__description"]}>{pet.description}</p>
    </div>
  ));
  // const filteredPets = [];

  // const filterPets = () => {
  //   apiPetRequest.forEach((pet) => {
  //     if (
  //       pet.species == petFilter.type &&
  //       pet.age == petFilter.age &&
  //       pet.gender == petFilter.gender
  //     ) {
  //       filteredPets.push(pet);
  //     } else {
  //       console.log("Nil pets");
  //     }
  //   });
  // };

  if (props.onSaveFormSubmission === true) {
    return <div className={styles.display}>{display}</div>;
  }
  return null;
};

export default PetDisplay;

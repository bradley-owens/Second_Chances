import React, { Fragment } from "react";
import styles from "./PetDisplay.module.css";

const PetDisplay = (props) => {
  const userPetRequest = props.onSaveAnimalData;
  const apiPetRequest = props.onSaveApiAnimals;

  console.log(apiPetRequest);
  const petFilter = {
    type: userPetRequest.type,
    gender: userPetRequest.age,
    age: userPetRequest.age,
  };

  const filtered = apiPetRequest.filter((el) => {
    return (
      (el.species == petFilter.type && el.gender == petFilter.gender) ||
      el.age == petFilter.age
    );
  });

  const display = filtered.map((pet) => (
    <div className={styles["display-card"]} key={Math.random()}>
      <img
        className={styles["display-card__img"]}
        src={`${
          pet.photos.length === 0
            ? "https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image-700x525.jpg"
            : pet.photos[0].small
        }`}
      ></img>
      <div className={styles["display-card__info"]}>
        <h2 className={styles["display-card__name"]}>{pet.name}</h2>
        <h3 className={styles["display-card__breed"]}>{pet.breeds.primary}</h3>
        <p className={styles["display-card__description"]}>{pet.description}</p>
      </div>
    </div>
  ));

  if (props.onSaveFormSubmission === true) {
    return (
      <Fragment>
        <h1 className={styles["display-title"]}>
          🔻 Scroll down to find a new friend! 🔻
        </h1>
        <div className={styles.display}>{display}</div>
      </Fragment>
    );
  }
  return null;
};

export default PetDisplay;

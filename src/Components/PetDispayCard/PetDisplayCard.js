import React from "react";
import styles from "./PetDisplayCard.module.css";

const PetDisplay = (props) => {
  return props.pets.map((pet) => (
    <div className={styles["display-card"]} key={Math.random()}>
      <img
        className={styles["display-card__img"]}
        src={`${
          pet.photos.length === 0
            ? "https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image-700x525.jpg"
            : pet.primary_photo_cropped.small
        }`}
      ></img>
      <div className={styles["display-card__info"]}>
        <h2 className={styles["display-card__name"]}>{pet.name}</h2>
        <h3 className={styles["display-card__breed"]}>{pet.breeds.primary}</h3>
        <p className={styles["display-card__size"]}>{pet.size}</p>
        <p className={styles["display-card__description"]}>
          {`${
            pet.tags.length <= 0
              ? pet.status
              : pet.tags[0] + "/" + pet.tags[1] + "/" + pet.tags[2]
          }`}
        </p>
        <a
          href={pet.url}
          target="_blank"
          className={styles["display-card__link"]}
        >
          Find me!
        </a>
      </div>
    </div>
  ));
};

export default PetDisplay;

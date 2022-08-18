import React, { useState, Fragment } from "react";
import PetForm from "../PetForm/PetForm";
import styles from "./Hero.module.css";
import img from "../IMG/Hero.svg";
import PetRender from "../PetRender/PetRender";

const Hero = (props) => {
  const [formSubmission, setFormSubmission] = useState(false);
  const [animalData, setAnimalData] = useState({});

  const savePetFormData = (enteredData) => {
    setAnimalData({
      ...enteredData,
    });

    setFormSubmission(true);
  };

  return (
    <Fragment>
      <div className={styles.hero}>
        <div className={styles["container__main"]}>
          <h1>Second Chances</h1>
          <h3>
            Second Chances gives you the oppurtunity to seek out and provide a
            new home to all the oldies and younglings up for adoption that
            didn't get the chance to give out all their love!
          </h3>
        </div>
        <div className={styles["hero-form"]}>
          <PetForm
            onSavePetFormData={savePetFormData}
            onSaveApiAnimals={props.onSaveApiData}
          />
        </div>
        <img className={styles["hero-img"]} src={img}></img>
      </div>

      <PetRender
        onSaveAnimalData={animalData}
        onSaveApiAnimals={props.onSaveApiData}
        onSaveFormSubmission={formSubmission}
        onClickedPet={props.onClickedPet}
      />
    </Fragment>
  );
};

export default Hero;

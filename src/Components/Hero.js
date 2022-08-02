import React, { useState } from "react";
import Wrapper from "./Helpers/Wrapper";
import PetForm from "./PetForm";
import styles from "./Hero.module.css";
import img from "./IMG/Hero.svg";
import PetDisplay from "./PetDisplay";

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
    <Wrapper>
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
      <PetDisplay
        onSaveAnimalData={animalData}
        onSaveApiAnimals={props.onSaveApiData}
        onSaveFormSubmission={formSubmission}
      />
    </Wrapper>
  );
};

export default Hero;

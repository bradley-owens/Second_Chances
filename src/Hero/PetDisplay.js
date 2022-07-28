import React from "react";
import img from "./IMG/Hero.svg";

const PetDisplay = (props) => {
  const userPetRequest = props.onSaveAnimalData;
  const apiPetRequest = props.onSaveApiAnimals;

  if (props.onSaveFormSubmission === true) {
    return <img className="hero-img" src={apiPetRequest[0].photos}></img>;
  }
  return <img className="hero-img" src={img}></img>;
};

export default PetDisplay;

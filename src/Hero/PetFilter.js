import React from "react";
import img from "./IMG/Hero.svg";

const PetFilter = (props) => {
  const userPetRequest = props.onSaveAnimalData;
  const apiPetRequest = props.onSaveApiAnimals;

  const petFilter = {
    type: userPetRequest.type,
    age: userPetRequest.age,
    gender: userPetRequest.age,
    id: userPetRequest.id,
  };

  const filteredPets = [];

  const filterPets = () => {
    apiPetRequest.forEach((pet) => {
      if (
        pet.species == petFilter.type &&
        pet.age == petFilter.age &&
        pet.gender == petFilter.gender
      ) {
        filteredPets.push(pet);
      } else {
        console.log("Nil pets");
      }
    });
  };

  if (props.onSaveFormSubmission === true) {
    filterPets();
    return (
      <img className="hero-img" src={apiPetRequest[0].photos[1].small}></img>
    );
  }
  return <img className="hero-img" src={img}></img>;
};

export default PetFilter;

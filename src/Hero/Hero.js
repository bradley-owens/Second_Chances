import React from "react";
import PetForm from "./PetForm";
import "./Hero.css";
import img from "./IMG/Hero.svg";

const Hero = () => {
  const savePetFormData = (enteredData) => {
    const animalData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log("IN HERO.JS");
    console.log(animalData);
  };

  return (
    <div className="hero">
      <div className="hero-container__main">
        <h1 className="hero-title">Second Chances</h1>
        <h3 className="hero-about">
          Second Chances gives you the oppurtunity to seek out and provide a new
          home to all the oldies and younglings up for adoption that didn't get
          the chance to give out all their love!
        </h3>
      </div>
      <div className="hero-form">
        <PetForm onSavePetFormData={savePetFormData} />
      </div>
      <img className="hero-img" src={img}></img>
    </div>
  );
};

export default Hero;

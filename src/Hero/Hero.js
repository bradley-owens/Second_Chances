import React from "react";
import PetForm from "./PetForm";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container__main">
        <h1 className="hero-title">Second Chances</h1>
        <h3 className="hero-about">
          Second Chances gives you the oppurtunity to seek out and provide a new
          home to all the oldies and younglings up for adoption that didn't get
          the chance to give out all love they can!
        </h3>
        <PetForm />
      </div>
    </div>
  );
};

export default Hero;

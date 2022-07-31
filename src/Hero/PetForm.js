import React, { useState } from "react";
import styles from "./PetForm.module.css";
// import PetDisplay from "./PetDisplay";

const Petform = (props) => {
  const [animalType, setAnimalType] = useState("Dog");
  const [animalAge, setAnimalAge] = useState("Senior");
  const [animalGender, SetAnimalGender] = useState("Girl");
  const [formSubmitted, setFormSubmitted] = useState("false");

  const animalTypeHandler = (e) => {
    setAnimalType(e.target.value);
  };

  const animalAgeHandler = (e) => {
    setAnimalAge(e.target.value);
  };

  const animalGenderHandler = (e) => {
    SetAnimalGender(e.target.value);
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    const animalData = {
      type: animalType,
      age: animalAge,
      gender: animalGender,
      id: Math.random().toString(),
    };

    setFormSubmitted(true);

    props.onSavePetFormData(animalData);

    setAnimalType("");
    setAnimalAge("");
    SetAnimalGender("");

    // return (
    //   <PetDisplay
    //     onSaveAnimalData={animalData}
    //     onSaveFormSubmission={formSubmission}
    //     onSaveApiAnimals={props.onSaveApiData}
    //   />
    // );
  };
  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={styles["search-pet__controls"]}>
        <div className={styles["search-pet__control"]}>
          <label>Animal</label>
          <select onChange={animalTypeHandler} type="text">
            <option value="Any">Any</option>
            <option value="Dog">Doggo</option>
            <option value="Cat">A Meow</option>
          </select>
        </div>
        <div className={styles["search-pet__control"]}>
          <label>Age</label>
          <select onChange={animalAgeHandler} type="text">
            <option value="Any">Any</option>
            <option value="Senior">Oldy</option>
            <option value="Adult">Adult</option>
            <option value="Young">Young</option>
            <option value="Baby">Baby</option>
          </select>
        </div>
        <div className={styles["search-pet__control"]}>
          <label>Gender</label>
          <select onChange={animalGenderHandler} type="text">
            <option value="Any">Any</option>
            <option value="Female">Girl</option>
            <option value="Male">Boy</option>
          </select>
        </div>
      </div>

      <div className={styles["search-pet__actions"]}>
        <button type="submit">Take a Chance</button>
      </div>
    </form>
  );
};

export default Petform;

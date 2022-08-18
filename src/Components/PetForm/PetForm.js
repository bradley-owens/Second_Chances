import React, { useRef, useState } from "react";
import styles from "../PetForm/PetForm.module.css";

const Petform = (props) => {
  const animalTypeRef = useRef("Dog");
  const animalAgeRef = useRef("Young");
  const animalGenderRef = useRef("Male");

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    const animalType = animalTypeRef.current.value;
    const animalAge = animalAgeRef.current.value;
    const animalGender = animalGenderRef.current.value;

    const animalData = {
      type: animalType,
      age: animalAge,
      gender: animalGender,
    };

    props.onSavePetFormData(animalData);
  };
  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={styles["search-pet__controls"]}>
        <div className={styles["search-pet__control"]}>
          <label>Animal</label>
          <select ref={animalTypeRef} type="text">
            <option value="Dog">Doggo</option>
            <option value="Cat">A Meow</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles["search-pet__control"]}>
          <label>Age</label>
          <select ref={animalAgeRef} type="text">
            <option value="Senior">Oldy</option>
            <option value="Adult">Adult</option>
            <option value="Young">Young</option>
            <option value="Baby">Baby</option>
          </select>
        </div>
        <div className={styles["search-pet__control"]}>
          <label>Gender</label>
          <select ref={animalGenderRef} type="text">
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

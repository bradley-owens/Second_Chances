import React, { useState } from "react";
import "./PetForm.css";

const Petform = (props) => {
  const [animalType, setAnimalType] = useState("");
  const [animalAge, setAnimalAge] = useState("");
  const [animalLocation, SetAnimalLocation] = useState("");

  const animalTypeHandler = (e) => {
    setAnimalType(e.target.value);
  };

  const animalAgeHandler = (e) => {
    setAnimalAge(e.target.value);
  };

  const animalLocationHandler = (e) => {
    SetAnimalLocation(e.target.value);
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    const animalData = {
      type: animalType,
      age: animalAge,
      location: animalLocation,
    };

    props.onSavePetFormData(animalData);

    setAnimalType("");
    setAnimalAge("");
    SetAnimalLocation("");
  };
  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className="search-pet__controls">
        <div className="search-pet__control">
          <label>Animal</label>
          <select onChange={animalTypeHandler} type="text">
            <option value="dog">Doggo</option>
            <option value="dog">A Meow</option>
          </select>
        </div>
        <div className="search-pet__control">
          <label>Age</label>
          <select onChange={animalAgeHandler} type="number">
            <option value="senior">Oldy</option>
            <option value="adult">Adult</option>
            <option value="young">Young</option>
            <option value="baby">Baby</option>
          </select>
        </div>
        <div className="search-pet__control">
          <label>Location/Zip</label>
          <input
            onChange={animalLocationHandler}
            type="number"
            min="1000"
            step="1"
          />
        </div>
      </div>

      <div className="search-pet__actions">
        <button type="submit">Take a Chance</button>
      </div>
    </form>
  );
};

export default Petform;

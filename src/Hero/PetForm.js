import React from "react";
import "./PetForm.css";

const Petform = () => {
  return (
    <form>
      <div className="search-pet__controls">
        <div className="search-pet__control">
          <label>Animal</label>
          <select type="text">
            <option value="dog">Doggo</option>
            <option value="dog">A Meow</option>
          </select>
        </div>
        <div className="search-pet__control">
          <label>Age</label>
          <select type="number">
            <option value="senior">Oldy</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
          </select>
        </div>
        <div className="search-pet__control">
          <label>Location/Zip</label>
          <input type="number" min="1000" step="1" />
        </div>
      </div>

      <div className="search-pet__actions">
        <button type="submit">Take a Chance</button>
      </div>
    </form>
  );
};

export default Petform;

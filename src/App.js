import React, { useEffect, useState } from "react";

import "./App.css";
import Hero from "./Hero/Hero";
import PetDisplay from "./Hero/PetDisplay";
import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: "1dTXLGniX8Fj7TtsTDrddpzapEkJcX19kWDwFblxUIUKpdZlYT",
  secret: "H5zz538xlqIoBe4d6L7PZF2rHuXwpmgy6aztjBCL",
});

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchPetData() {
      const response = await client.animal.search();
      const animals = response.data.animals;
      const pics = animals
        .map((el) => {
          if (el.photos.length > 0) return el;
        })
        .filter((pet) => pet !== undefined);

      setApiData(pics);
    }
    fetchPetData();
  }, []);

  return (
    <div className="App">
      <Hero onSaveApiData={apiData} />
      <section>
        <PetDisplay
          onSaveAnimalData={animalData}
          onSaveFormSubmission={formSubmission}
          onSaveApiAnimals={props.onSaveApiData}
        />
      </section>
    </div>
  );
};

export default App;

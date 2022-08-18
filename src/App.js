import React, { Component, Fragment, useEffect, useState } from "react";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import PetModal from "./Components/PetModal/PetModal.js";
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

      console.log(pics);
    }
    fetchPetData();
  }, []);

  //modal
  const [showPetModal, setShowPetModal] = useState(false);
  const [clickedPet, setClickedPet] = useState();

  const showModal = () => {
    setShowPetModal(true);
  };

  const hideModal = () => {
    setShowPetModal(false);
  };

  const showPet = (clicked) => {
    setClickedPet(clicked);
    setShowPetModal(true);
  };

  return (
    <Fragment>
      <div className="App">
        <Hero onSaveApiData={apiData} onClickedPet={showPet} />
      </div>
      {showPetModal && (
        <PetModal onCloseModal={hideModal} onShowClickedPet={clickedPet} />
      )}
    </Fragment>
  );
};

export default App;

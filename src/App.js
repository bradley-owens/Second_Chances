import React, { useState } from "react";

import "./App.css";
import Hero from "./Hero/Hero";
import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: "1dTXLGniX8Fj7TtsTDrddpzapEkJcX19kWDwFblxUIUKpdZlYT",
  secret: "H5zz538xlqIoBe4d6L7PZF2rHuXwpmgy6aztjBCL",
});

const App = () => {
  const [apiData, setApiData] = useState("");

  client.animal
    .search()
    .then(function (response) {
      const animals = response.data.animals;

      const pics = animals
        .map((el) => {
          if (el.photos.length > 0) return el;
        })
        .filter((pet) => pet != undefined);

      setApiData(pics);

      // let oldies = animals
      //   .map((el) => {
      //     if (el.age === "Adult") return el;
      //   })
      //   .filter((pet) => pet != undefined);
    })

    .catch(function (error) {
      // console.log(error);
    });

  return (
    <div className="App">
      <Hero onSaveApiData={apiData} />
    </div>
  );
};

export default App;

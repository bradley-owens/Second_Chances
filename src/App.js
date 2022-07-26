import "./App.css";
import Hero from "./Hero/Hero";
import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: "1dTXLGniX8Fj7TtsTDrddpzapEkJcX19kWDwFblxUIUKpdZlYT",
  secret: "H5zz538xlqIoBe4d6L7PZF2rHuXwpmgy6aztjBCL",
});

const App = () => {
  client.animal
    .search()
    .then(function (response) {
      let animals = response.data.animals;

      let oldies = animals
        .map((el) => {
          if (el.age === "Adult") return el;
        })
        .filter((pet) => pet != undefined);

      let pics = animals
        .map((el) => {
          if (el.photos.length > 0) return el;
        })
        .filter((pet) => pet != undefined);

      // console.log(pics);
    })
    .catch(function (error) {
      // console.log(error);
    });

  return (
    <div className="App">
      <Hero />
    </div>
  );
};

export default App;

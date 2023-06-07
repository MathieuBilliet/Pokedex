import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MyTitle from "./components/MyTitle/MyTitle";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const Pokemon = pokemonList[pokemonIndex];

  return (
    <>
      <NavBar
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
      />
      <MyTitle />
      <div className="CardContainer">
        <img src={Pokemon.imgSrc} alt={Pokemon.name} />
        <h1>{Pokemon.name} </h1>
      </div>
    </>
  );
};

export default App;

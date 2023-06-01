import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

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

  const handleClickSui = () =>
    setPokemonIndex(
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex
    );

  const handleClickPre = () =>
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex);

  const Pokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <img src={Pokemon.imgSrc} alt={Pokemon.name} />
      <div>
        {pokemonIndex > 0 ? (
          <button onClick={handleClickPre}>Précédent</button>
        ) : undefined}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickSui}>Suivant</button>
        ) : undefined}
      </div>
    </div>
  );
};

export default App;

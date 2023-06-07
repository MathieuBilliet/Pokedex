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
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];
const App = () => {
  //Déclaration d'un state pour stocker l'index du pokemon affiché, initialisé à 0
  const [pokemonIndex, setPokemonIndex] = useState(0);

  //Déclaration d'une constante pour stocker le pokemon à afficher  depuis la liste des pokemons (pokemonList)  en fonction de l'index
  const Pokemon = pokemonList[pokemonIndex];

  return (
    <>
      {/* Passage des props pokemonList, pokemonIndex et setPokemonIndex à NavBar */
      /* pokemonList est passé en props pour vérifier la taille du tableau pour afficher au nonn le boutton suivant */
      /* pokemonIndex est passé en props pour vérifier si on est au début ou à la fin du tableau pour afficher au nonn le boutton suivant */
      /* setPokemonIndex est passé en props pour modifier l'index du pokemon à afficher en fonction du boutton cliqué */}
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

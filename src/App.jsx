import './App.css'
import MyTitle from './components/Mytitle'
import PokemonCard from './components/PokemonCard'

function App() {

  const pokemonList = [
  {
  name: "bulbasaur",
  imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
  name: "mew",
  },
  ];

  const selectedPokemon = pokemonList[0];

  return (
    <>
      <PokemonCard pokemon={selectedPokemon} />
    </>
  );
}

export default App;
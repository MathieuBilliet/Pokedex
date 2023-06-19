import "./NavBar.css";

// Déclaration d'un composant NavBar
// Ce composant prend en props pokemonList, pokemonIndex et setPokemonIndex avec des { } pour les destructurer directement
// pokemonList est passé en props pour vérifier la taille du tableau pour afficher au nonn le boutton suivant
// pokemonIndex est passé en props pour vérifier si on est au début ou à la fin du tableau pour afficher au nonn le boutton suivant
// setPokemonIndex est passé en props pour modifier l'index du pokemon à afficher en fonction du boutton cliqué

const NavBar = ({ pokemonList, setPokemonIndex }) => {
  const handleClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <nav className="MenuNav">
      <ul>
        {pokemonList.map((pokemon) => (
          <button className="InputFive" key={pokemon.id}>
            <input
              className="inputpok"
              type="button"
              value={pokemon.name}
              onClick={() => handleClick(pokemon.id)}
            />
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

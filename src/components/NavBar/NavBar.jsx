import "./NavBar.css";

// Déclaration d'un composant NavBar
// Ce composant prend en props pokemonList, pokemonIndex et setPokemonIndex avec des { } pour les destructurer directement
// pokemonList est passé en props pour vérifier la taille du tableau pour afficher au nonn le boutton suivant
// pokemonIndex est passé en props pour vérifier si on est au début ou à la fin du tableau pour afficher au nonn le boutton suivant
// setPokemonIndex est passé en props pour modifier l'index du pokemon à afficher en fonction du boutton cliqué

const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  // Déclaration de deux fonctions handleClickSui et handleClickPre

  // handleClickSui permet d'incrémenter l'index du pokemon à afficher de 1 si l'index est inférieur à la taille du tableau - 1
  // sinon l'index reste le même

  const handleClickSui = () =>
    setPokemonIndex(
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex
    );

  // handleClickPre permet de décrémenter l'index du pokemon à afficher de 1 si l'index est supérieur à 0
  // sinon l'index reste le même
  const handleClickPre = () =>
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex);

  return (
    <nav>
      <div className="buttonContainer">
        {pokemonIndex > 0 ? (
          // Si pokemonIndex est supérieur à 0, on affiche le boutton précédent
          // Ce boutton déclenche la fonction handleClickPre au clic permet de décrémenter l'index du pokemon à afficher de 1 si l'index est supérieur à 0
          <button onClick={handleClickPre}>Précédent</button>
        ) : // Sinon on n'affiche rien
        undefined}

        {pokemonIndex < pokemonList.length - 1 ? (
          // Si pokemonIndex est inférieur à la taille du tableau - 1, on affiche le boutton suivant */
          // Ce boutton déclenche la fonction handleClickSui au clic permet d'incrémenter l'index du pokemon à afficher de 1 si l'index est inférieur à la taille du tableau - 1
          <button onClick={handleClickSui}>Suivant</button>
        ) : // Sinon on n'affiche rien
        undefined}
      </div>
    </nav>
  );
};

export default NavBar;

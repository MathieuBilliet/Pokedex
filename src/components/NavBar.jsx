const NavBar = ({pokemonList,pokemonIndex,setPokemonIndex}) => {
  
    const handleClickSui = () =>
    setPokemonIndex(
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex
    );

  const handleClickPre = () =>
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex);

  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPre}>Précédent</button>
      ) : undefined}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickSui}>Suivant</button>
      ) : undefined}
    </div>
  );
};

export default NavBar;

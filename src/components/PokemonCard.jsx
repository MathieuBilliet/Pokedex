function PokemonCard(props) {
    console.log(props.pokemon);

return ( 
    <div>
    <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
    <p>{props.pokemon.name}</p>
    </div>
);
}




export default PokemonCard;
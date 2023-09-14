import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonByName } from "../../services/pokedexService";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const PokeDexDetails = () => {
  const [pokeDetail, setPokeDetails] = useState([]);
  const { pokemonName } = useParams();

  useEffect(() => {
    getPokemonByName(pokemonName).then((obj) => {
      setPokeDetails(obj);
    });
  }, [pokemonName]);

  return (
    <>
      <h1>{pokemonName}</h1>
      <img src={pokeDetail.sprites?.front_default} alt="pokemon" />
      <div>
        <div>Height: {pokeDetail.height} dm</div>
        <div>Weight: {pokeDetail.weight}lbs</div>
        <div>
          Type: {pokeDetail.types?.[0].type.name}{" "}
          {pokeDetail.types?.[1]?.type.name}
        </div>
        <div>
          Abilities:
          <div>{pokeDetail.abilities?.[0].ability.name}</div>
          <div> {pokeDetail.abilities?.[1]?.ability.name}</div>
          <div> {pokeDetail.abilities?.[2]?.ability.name}</div>
        </div>
      </div>
      <Link to={`/pokedex/${pokemonName}/AddToTeam`}>
        <Button>Add to Team</Button>
      </Link>
    </>
  );
};

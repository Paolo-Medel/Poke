import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonByName } from "../../services/pokedexService";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  deleteOwnedPokemonById,
  getOwnedPokemonByName,
} from "../../services/pokeBoxService";
import { gameServiceById } from "../../services/gameService";

export const PokeBoxDetails = () => {
  const [pokeApiDetail, setPokeApiDetails] = useState([]);
  const [ownedPokemon, setOwnedPokemon] = useState({});
  const [game, setGame] = useState({});
  const { pokemonName } = useParams();

  useEffect(() => {
    getPokemonByName(pokemonName).then((obj) => {
      setPokeApiDetails(obj);
    });
    getOwnedPokemonByName(pokemonName).then((obj) => {
      setOwnedPokemon(obj);
    });
  }, [pokemonName]);

  useEffect(() => {
    gameServiceById(ownedPokemon[0]?.gameId).then((obj) => {
      setGame(obj);
    });
  }, [ownedPokemon]);

  return (
    <>
      <h1>{pokemonName}</h1>
      <img src={pokeApiDetail.sprites?.front_default} alt="pokemon" />
      <div>
        <div>Height: {pokeApiDetail.height} dm</div>
        <div>Weight: {pokeApiDetail.weight}lbs</div>
        <div>
          Type: {pokeApiDetail.types?.[0].type.name}{" "}
          {pokeApiDetail.types?.[1]?.type.name}
        </div>
        <div>
          Abilities:
          <div>{pokeApiDetail.abilities?.[0].ability.name}</div>
          <div> {pokeApiDetail.abilities?.[1]?.ability.name}</div>
          <div> {pokeApiDetail.abilities?.[2]?.ability.name}</div>
        </div>
      </div>
      <div>
        <div>Attack: {ownedPokemon?.[0]?.attack}</div>
        <div>Defense: {ownedPokemon?.[0]?.defense}</div>
        <div>Sp Atk: {ownedPokemon?.[0]?.spAtk}</div>
        <div>Sp Def: {ownedPokemon?.[0]?.spDef}</div>
        <div>Speed: {ownedPokemon?.[0]?.speed}</div>
        <div>HP: {ownedPokemon?.[0]?.hp}</div>
      </div>
      <div>
        <p>
          {pokemonName} was caught in {game[0]?.name}
        </p>
      </div>
      <Button>Release to Wild</Button>
    </>
  );
};

//TODO Delete method

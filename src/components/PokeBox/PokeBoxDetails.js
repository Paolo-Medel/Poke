import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

  return (
    <div className="imageRay">
      <div className="gridLayout">
        <div>
          <img src={pokeApiDetail.sprites?.front_default} alt="pokemon" />
          <h1>{pokemonName}</h1>
        </div>
        <div className="descriptors yellow">
          <div>Height: {pokeApiDetail.height} dm</div>
          <div>Weight: {pokeApiDetail.weight}lbs</div>
          <div>Ability: {ownedPokemon?.[0]?.ability}</div>
          <div>
            {pokemonName} was caught in {game[0]?.name}
          </div>
        </div>
        <div>
          Type: {pokeApiDetail.types?.[0].type.name}{" "}
          {pokeApiDetail.types?.[1]?.type.name}
        </div>
        <div className="descriptions yellow">Description</div>
        <div className="stats yellow">
          <div>Attack: {ownedPokemon?.[0]?.attack}</div>
          <div>Defense: {ownedPokemon?.[0]?.defense}</div>
          <div>Sp Atk: {ownedPokemon?.[0]?.spAtk}</div>
          <div>Sp Def: {ownedPokemon?.[0]?.spDef}</div>
          <div>Speed: {ownedPokemon?.[0]?.speed}</div>
          <div>HP: {ownedPokemon?.[0]?.hp}</div>
        </div>
        <div className="buttonsDetails yellow">
          <Link to={`/pokebox/${pokemonName}/edit`}>
            <Button>Edit {pokemonName}</Button>
          </Link>
          <Button
            onClick={() => {
              deleteOwnedPokemonById(ownedPokemon[0].id).then(() => {
                navigate(`/pokebox/`);
              });
            }}
          >
            Release to Wild
          </Button>
        </div>
      </div>
    </div>
  );
};

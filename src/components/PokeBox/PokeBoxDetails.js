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
        <div className="yellowBG1">
          <div className="pokemonName">{pokemonName}</div>
          <img
            className="imagePokemon"
            src={pokeApiDetail.sprites?.front_default}
            alt="pokemon"
          />
        </div>
        <div className="descriptors yellowBG2">
          <div className="marginLeft">Height: {pokeApiDetail.height} dm</div>
          <div>Weight: {pokeApiDetail.weight}lbs</div>
          <div className="marginLeft">
            Ability: {ownedPokemon?.[0]?.ability}
          </div>
          <div>
            {pokemonName} was caught in {game[0]?.name}
          </div>
        </div>
        <div className="yellowBG3 type">
          <div className="marginLeft">
            Type: {pokeApiDetail.types?.[0].type.name}{" "}
            {pokeApiDetail.types?.[1]?.type.name}
          </div>
        </div>
        <div className="descriptions yellowBG4">
          <div className="marginLeft">Description:</div>
        </div>
        <div className="stats yellowBG5">
          <div className="marginLeft">Attack: {ownedPokemon?.[0]?.attack}</div>
          <div>Defense: {ownedPokemon?.[0]?.defense}</div>
          <div className="marginLeft">Sp Atk: {ownedPokemon?.[0]?.spAtk}</div>
          <div>Sp Def: {ownedPokemon?.[0]?.spDef}</div>
          <div className="marginLeft">Speed: {ownedPokemon?.[0]?.speed}</div>
          <div>HP: {ownedPokemon?.[0]?.hp}</div>
        </div>
        <div className="buttonsDetails yellow">
          <div>
            <Link to={`/pokebox/${pokemonName}/edit`}>
              <Button className="btnHeightWidth">Edit {pokemonName}</Button>
            </Link>
          </div>
          <div>
            <Button
              className="btnHeightWidth"
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
    </div>
  );
};

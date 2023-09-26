import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPokemonDescription } from "../../services/pokedexService";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  deleteOwnedPokemonById,
  getOwnedPokemonById,
} from "../../services/pokeBoxService";
import { gameServiceById } from "../../services/gameService";

export const PokeBoxDetails = () => {
  const [ownedPokemon, setOwnedPokemon] = useState({});
  const [game, setGame] = useState({});
  const [description, setDescription] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOwnedPokemonById(parseInt(id)).then((obj) => {
      setOwnedPokemon(obj);
    });
  }, [id]);

  useEffect(() => {
    gameServiceById(ownedPokemon.gameId).then((obj) => {
      setGame(obj);
    });
  }, [ownedPokemon]);

  const navigate = useNavigate();

  useEffect(() => {
    const name = ownedPokemon.name;
    if (name !== undefined) {
      getPokemonDescription(name).then((obj) => {
        const flavor_text = obj.flavor_text_entries;
        for (const obj of flavor_text) {
          if (obj.language.name === "en") {
            const descrip = obj.flavor_text;
            setDescription(descrip);
          }
        }
      });
    }
  }, [ownedPokemon]);

  return (
    <div className="imageRay">
      <div className="gridLayout">
        <div className="yellowBG1">
          <div className="pokemonName">{ownedPokemon.name}</div>
          <img
            className="imagePokemon"
            src={ownedPokemon.image}
            alt="pokemon"
          />
        </div>
        <div className="descriptors yellowBG2">
          <div className="marginLeft">Height: {ownedPokemon.height} dm</div>
          <div>Weight: {ownedPokemon.weight}lbs</div>
          <div className="marginLeft">Ability: {ownedPokemon?.ability}</div>
          <div>
            {ownedPokemon.name} was caught in {game[0]?.name}
          </div>
        </div>
        <div className="yellowBG3 type">
          <div className="marginLeft">
            Type: {ownedPokemon.type1} {ownedPokemon.type2}
          </div>
        </div>
        <div className="descriptions yellowBG4">
          <div className="marginLeft">Description: {description}</div>
        </div>
        <div className="stats yellowBG5">
          <div className="marginLeft">Attack: {ownedPokemon?.attack}</div>
          <div>Defense: {ownedPokemon?.defense}</div>
          <div className="marginLeft">Sp Atk: {ownedPokemon?.spAtk}</div>
          <div>Sp Def: {ownedPokemon?.spDef}</div>
          <div className="marginLeft">Speed: {ownedPokemon?.speed}</div>
          <div>HP: {ownedPokemon?.hp}</div>
        </div>
        <div className="buttonsDetails yellow">
          <div>
            <Link to={`/pokebox/${id}/edit`}>
              <Button className="btnHeightWidth">
                Edit {ownedPokemon.name}
              </Button>
            </Link>
          </div>
          <div>
            <Button
              className="btnHeightWidth"
              onClick={() => {
                deleteOwnedPokemonById(ownedPokemon.id).then(() => {
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

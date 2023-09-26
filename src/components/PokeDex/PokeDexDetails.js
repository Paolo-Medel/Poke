import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getPokemonByName,
  getPokemonDescription,
} from "../../services/pokedexService";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const PokeDexDetails = () => {
  const [pokeDetail, setPokeDetails] = useState([]);
  const [pokeDescription, setPokeDescription] = useState([]);
  const [description, setDescription] = useState([]);
  const { pokemonName } = useParams();

  useEffect(() => {
    getPokemonByName(pokemonName).then((obj) => {
      setPokeDetails(obj);
    });
    getPokemonDescription(pokemonName).then((obj) => {
      setPokeDescription(obj);
    });
  }, [pokemonName]);

  useEffect(() => {
    const englishDescription = (pokeObj) => {
      const flavor_text = pokeObj?.flavor_text_entries;
      if (flavor_text !== undefined) {
        for (const obj of flavor_text) {
          if (obj.language.name === "en") {
            return obj.flavor_text;
          }
        }
      }
    };

    setDescription(englishDescription(pokeDescription));
  }, [pokeDescription]);

  return (
    <div className="PokeDexDetails">
      <div className="dexDetailsGrid">
        <img
          className="pokeImg"
          src={pokeDetail.sprites?.front_default}
          alt="pokemon"
        />
        <div className="topRightBox">
          <div>Height: {pokeDetail.height} dm</div>
          <div>Weight: {pokeDetail.weight} lbs</div>
          <div>
            Type: {pokeDetail.types?.[0].type.name}{" "}
            {pokeDetail.types?.[1]?.type.name}
          </div>
          <div>
            Abilities: {pokeDetail.abilities?.[0].ability.name}
            {/* <div>
              Additional Abilities:
              <div>
                {pokeDetail.abilities?.[1]?.ability.name}
                {", " + pokeDetail.abilities?.[2]?.ability.name}
              </div>
            </div> */}
          </div>
        </div>

        <div className="descriptionz">
          <div>Description: {description}</div>
        </div>

        <div className="AddToTeamBtn">
          <Link to={`/pokedex/${pokemonName}/AddToTeam`}>
            <Button>Add to Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//TODO create the logic for the abilities and add description

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
        {/* <div>
          <p>Description</p>
        </div> */}
        <div className="AddToTeamBtn">
          <Link to={`/pokedex/${pokemonName}/AddToTeam`}>
            <button>Add to Team</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//TODO create the logic for the abilities and add description

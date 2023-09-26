import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToTeam } from "../../services/addToTeamService";
import {
  getPokemonByName,
  getPokemonDescription,
} from "../../services/pokedexService";
import { gameService } from "../../services/gameService";
import { Button } from "react-bootstrap";
import "./AddToTeam.css";

export const AddToTeam = ({ currentUser }) => {
  const [pokemon, setPokemon] = useState([]);
  const [games, setGames] = useState([]);
  const [pokemonToAdd, setPokemonToAdd] = useState({
    name: "",
    userId: currentUser.id,
    pokeId: 0,
    gameId: 0,
    attack: 0,
    defense: 0,
    spAtk: 0,
    spDef: 0,
    hp: 0,
    speed: 0,
    image: "",
    ability: "",
    height: 0,
    weight: 0,
    type1: "",
    type2: "",
  });
  const { pokemonName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getPokemonByName(pokemonName).then((obj) => {
      setPokemon(obj);
      const copy = { ...pokemonToAdd };
      copy.name = obj.name;
      copy.pokeId = obj.id;
      copy.image = obj.sprites.front_default;
      copy.height = obj.height;
      copy.weight = obj.weight;
      copy.type1 = obj.types[0].type.name;
      copy.type2 = obj.types[1]?.type.name;
      setPokemonToAdd(copy);
    });
    gameService().then((obj) => {
      setGames(obj);
    });
  }, []);

  const handleSave = () => {
    let editedPokemon = {
      name: pokemonToAdd.name,
      userId: pokemonToAdd.userId,
      pokeId: pokemonToAdd.pokeId,
      gameId: pokemonToAdd.gameId,
      attack: pokemonToAdd.attack,
      defense: pokemonToAdd.defense,
      spAtk: pokemonToAdd.spAtk,
      spDef: pokemonToAdd.spDef,
      hp: pokemonToAdd.hp,
      speed: pokemonToAdd.speed,
      image: pokemonToAdd.image,
      ability: pokemonToAdd.ability,
      height: pokemonToAdd.height,
      weight: pokemonToAdd.weight,
      type1: pokemonToAdd.type1,
      type2: pokemonToAdd.type2,
    };

    addToTeam(editedPokemon).then(() => {
      navigate(`/pokedex/`);
    });
  };

  return (
    <div className="addToTeamBG">
      <div>
        <div className="pokemonName">
          <div>{pokemon.name}</div>
        </div>
        <div>
          <img
            className="imagePokemon1"
            src={pokemon.sprites?.front_default}
            alt="pokemon"
          />
        </div>
        <div className="formBox1">
          <div className="leftMarginForm topMarginForm">
            <label>Attack: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.attack}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.attack = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
            ></input>
          </div>
          <div className="topMarginForm">
            <label>Defense: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.defense}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.defense = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
            ></input>
          </div>
          <div className="leftMarginForm">
            <label>Special Attack: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.spAtk}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.spAtk = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
            ></input>
          </div>
          <div>
            <label>Special Defense: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.spDef}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.spDef = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
            ></input>
          </div>

          <div className="leftMarginForm">
            <label>Speed: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.speed}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.speed = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
            ></input>
          </div>

          <div>
            <label>HP: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.hp}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.hp = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
            ></input>
          </div>
          <div className="leftMarginForm">
            <label>Which ability does your Pokemon have?</label>
            <select
              defaultValue={"Please Select an Option"}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.ability = event.target.value;
                setPokemonToAdd(copy);
              }}
            >
              <option value="">Please Select an option</option>
              {pokemon.abilities?.map((obj) => {
                return (
                  <option key={obj.ability.name} value={obj.ability.name}>
                    {obj.ability.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label>Which game did you catch {pokemon.name} in?</label>
            <select
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.gameId = parseInt(event.target.value);
                setPokemonToAdd(copy);
              }}
              defaultValue={"Please Select an option"}
            >
              <option value="">Please Select an option</option>
              {games.map((game) => {
                return (
                  <option value={game.id} key={game.id}>
                    {game.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btnForm">
            <Button
              onClick={() => {
                handleSave();
              }}
            >
              Save this 'Mon!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

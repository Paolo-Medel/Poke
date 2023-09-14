import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToTeam } from "../../services/addToTeamService";
import { getPokemonByName } from "../../services/pokedexService";
import { gameService } from "../../services/gameService";

export const AddToTeam = () => {
  const [pokemon, setPokemon] = useState([]);
  const [games, setGames] = useState([]);
  const [pokemonToAdd, setPokemonToAdd] = useState({
    name: "",
    userId: 0,
    pokeId: 0,
    gameId: 0,
    attack: 0,
    defense: 0,
    spAtk: 0,
    spDef: 0,
    hp: 0,
    speed: 0,
  });
  const { pokemonName } = useParams();

  useEffect(() => {
    getPokemonByName(pokemonName).then((obj) => {
      setPokemon(obj);
      const copy = { ...pokemonToAdd };
      copy.name = obj.name;
      copy.pokeId = obj.id;
      setPokemonToAdd(copy);
    });
    gameService().then((obj) => {
      setGames(obj);
    });
  }, []);

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt="pokemon" />
      <div>
        <form>
          <fieldset>
            <label>Attack: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.attack}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.attack = event.target.value;
                setPokemonToAdd(copy);
              }}
            ></input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <label>Defense: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.defense}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.defense = event.target.value;
                setPokemonToAdd(copy);
              }}
            ></input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <label>Special Attack: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.spAtk}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.spAtk = event.target.value;
                setPokemonToAdd(copy);
              }}
            ></input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <label>Special Defense: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.spDef}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.spDef = event.target.value;
                setPokemonToAdd(copy);
              }}
            ></input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <label>Speed: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.speed}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.speed = event.target.value;
                setPokemonToAdd(copy);
              }}
            ></input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <label>HP: </label>
            <input
              type="number"
              required
              value={pokemonToAdd.hp}
              onChange={(event) => {
                const copy = { ...pokemonToAdd };
                copy.hp = event.target.value;
                setPokemonToAdd(copy);
              }}
            ></input>
          </fieldset>
        </form>
      </div>
      <div>
        <label>Which game did you catch {pokemon.name} in?</label>
        <select>
          {games.map((game) => {
            return <option key={game.id}>{game.name}</option>;
          })}
        </select>
      </div>
    </>
  );
};

//! how do I get the pokemon data in here?

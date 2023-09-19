import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editPokeBox,
  pokeBoxServiceIdAndName,
} from "../../services/pokeBoxService";
import { gameService } from "../../services/gameService";
import { Button } from "react-bootstrap";

export const EditPokeBoxMon = ({ currentUser }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [games, setGames] = useState([]);
  const { pokemonName } = useParams();

  useEffect(() => {
    pokeBoxServiceIdAndName(currentUser.id, pokemonName).then((obj) => {
      setCurrentPokemon(obj);
    });
    gameService().then((obj) => {
      setGames(obj);
    });
  }, []);

  const navigate = useNavigate();

  const handleSave = () => {
    let editedPokemon = {
      name: currentPokemon[0].name,
      userId: currentPokemon[0].userId,
      pokeId: currentPokemon[0].pokeId,
      gameId: currentPokemon[0].gameId,
      attack: currentPokemon[0].attack,
      defense: currentPokemon[0].defense,
      spAtk: currentPokemon[0].spAtk,
      spDef: currentPokemon[0].spDef,
      hp: currentPokemon[0].hp,
      speed: currentPokemon[0].speed,
      image: currentPokemon[0].image,
      ability: currentPokemon[0].ability,
      id: currentPokemon[0].id,
    };

    editPokeBox(editedPokemon).then(() => {
      navigate(`/pokebox/${pokemonName}`);
    });
  };

  return (
    <>
      <h1>{currentPokemon[0]?.name}</h1>
      <img src={currentPokemon[0]?.image} alt="currentPokemon" />
      <div>
        <form>
          <fieldset>
            <label>Attack: </label>
            <input
              type="number"
              required
              value={currentPokemon[0]?.attack}
              onChange={(event) => {
                const copy = { ...currentPokemon };
                copy[0].attack = parseInt(event.target.value);
                setCurrentPokemon(copy);
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
              value={currentPokemon[0]?.defense}
              onChange={(event) => {
                const copy = { ...currentPokemon };
                copy[0].defense = parseInt(event.target.value);
                setCurrentPokemon(copy);
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
              value={currentPokemon[0]?.spAtk}
              onChange={(event) => {
                const copy = { ...currentPokemon };
                copy[0].spAtk = parseInt(event.target.value);
                setCurrentPokemon(copy);
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
              value={currentPokemon[0]?.spDef}
              onChange={(event) => {
                const copy = { ...currentPokemon };
                copy[0].spDef = parseInt(event.target.value);
                setCurrentPokemon(copy);
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
              value={currentPokemon[0]?.speed}
              onChange={(event) => {
                const copy = { ...currentPokemon };
                copy[0].speed = parseInt(event.target.value);
                setCurrentPokemon(copy);
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
              value={currentPokemon[0]?.hp}
              onChange={(event) => {
                const copy = { ...currentPokemon };
                copy[0].hp = parseInt(event.target.value);
                setCurrentPokemon(copy);
              }}
            ></input>
          </fieldset>
        </form>
        {/* <label>Which ability does your Pokemon have?</label>
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
      </div> */}
        {/* <div>
          <label>Which game did you catch {pokemonName} in?</label>
          <select
            onChange={(event) => {
              const copy = { ...currentPokemon };
              copy[0].gameId = parseInt(event.target.value);
              setCurrentPokemon(copy);
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
        </div>*/}
        <div>
          <Button
            onClick={() => {
              handleSave();
            }}
          >
            Save this 'Mon!
          </Button>
        </div>
      </div>
    </>
  );
};

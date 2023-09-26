import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editPokeBox,
  getOwnedPokemonById,
} from "../../services/pokeBoxService";
import { gameService } from "../../services/gameService";
import { Button } from "react-bootstrap";

export const EditPokeBoxMon = ({ currentUser }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [games, setGames] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOwnedPokemonById(id).then((obj) => {
      setCurrentPokemon(obj);
    });
    gameService().then((obj) => {
      setGames(obj);
    });
  }, []);

  const navigate = useNavigate();

  const handleSave = () => {
    let editedPokemon = {
      name: currentPokemon.name,
      userId: currentPokemon.userId,
      pokeId: currentPokemon.pokeId,
      gameId: currentPokemon.gameId,
      attack: currentPokemon.attack,
      defense: currentPokemon.defense,
      spAtk: currentPokemon.spAtk,
      spDef: currentPokemon.spDef,
      hp: currentPokemon.hp,
      speed: currentPokemon.speed,
      image: currentPokemon.image,
      ability: currentPokemon.ability,
      height: currentPokemon.height,
      weight: currentPokemon.weight,
      type1: currentPokemon.type1,
      type2: currentPokemon.type2,
      id: currentPokemon.id,
    };

    editPokeBox(editedPokemon).then(() => {
      navigate(`/pokebox/${id}`);
    });
  };

  return (
    <div className="editPokeBoxBG">
      <div>
        <div>
          <div className="pokemonName">{currentPokemon.name}</div>
        </div>
        <div>
          <img
            className="imagePokemon1"
            src={currentPokemon.image}
            alt="currentPokemon"
          />
        </div>
        <div className="formBox">
          <div>
            <div className="leftMarginForm topMarginForm">
              <label>Attack: </label>
              <input
                type="number"
                required
                value={currentPokemon.attack}
                onChange={(event) => {
                  const copy = { ...currentPokemon };
                  copy.attack = parseInt(event.target.value);
                  setCurrentPokemon(copy);
                }}
              ></input>
            </div>
          </div>
          <div>
            <div className="topMarginForm">
              <label>Defense: </label>
              <input
                type="number"
                required
                value={currentPokemon.defense}
                onChange={(event) => {
                  const copy = { ...currentPokemon };
                  copy.defense = parseInt(event.target.value);
                  setCurrentPokemon(copy);
                }}
              ></input>
            </div>
          </div>
          <div>
            <div className="leftMarginForm">
              <label>Special Attack: </label>
              <input
                type="number"
                required
                value={currentPokemon.spAtk}
                onChange={(event) => {
                  const copy = { ...currentPokemon };
                  copy.spAtk = parseInt(event.target.value);
                  setCurrentPokemon(copy);
                }}
              ></input>
            </div>
          </div>
          <div>
            <div>
              <label>Special Defense: </label>
              <input
                type="number"
                required
                value={currentPokemon.spDef}
                onChange={(event) => {
                  const copy = { ...currentPokemon };
                  copy.spDef = parseInt(event.target.value);
                  setCurrentPokemon(copy);
                }}
              ></input>
            </div>
          </div>
          <div>
            <div className="leftMarginForm">
              <label>Speed: </label>
              <input
                type="number"
                required
                value={currentPokemon.speed}
                onChange={(event) => {
                  const copy = { ...currentPokemon };
                  copy.speed = parseInt(event.target.value);
                  setCurrentPokemon(copy);
                }}
              ></input>
            </div>
          </div>
          <div>
            <div>
              <label>HP: </label>
              <input
                type="number"
                required
                value={currentPokemon.hp}
                onChange={(event) => {
                  const copy = { ...currentPokemon };
                  copy.hp = parseInt(event.target.value);
                  setCurrentPokemon(copy);
                }}
              ></input>
            </div>
          </div>
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

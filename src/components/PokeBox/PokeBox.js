import { useEffect, useState } from "react";
import "./PokeBox.css";
import { pokeBoxService } from "../../services/pokeBoxService";
import { Link } from "react-router-dom";

export const PokeBox = ({ currentUser }) => {
  // need current user id to send to setter function. Bypassing for now
  const [ownedPokemon, setOwnedPokemon] = useState([]);

  useEffect(() => {
    pokeBoxService(currentUser.id).then((obj) => {
      setOwnedPokemon(obj);
    });
  }, []);

  return (
    <>
      <h1>PokeBox</h1>
      <div>
        {ownedPokemon.map((obj) => {
          return (
            <Link to={`/pokebox/${obj.name}`} key={obj.pokeId}>
              <img src={obj.image} alt={obj.name} key={obj.pokeId} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import "./PokeBox.css";
import { pokeBoxService } from "../../services/pokeBoxService";
import { Link } from "react-router-dom";
import image from "./PokeBox-9-20-2023.png";
import { Image } from "react-bootstrap";

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
      <div className="bg1">
        <div className="flex">
          <Image src={image}></Image>
          <div className="pokebox">
            {ownedPokemon.map((obj) => {
              return (
                <Link to={`/pokebox/${obj.name}`} key={obj.id}>
                  <img src={obj.image} alt={obj.name} key={obj.pokeId} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

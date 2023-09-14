import { useEffect, useState } from "react";
import "./PokeDex.css";
import { getPokemons } from "../../services/pokedexService";
import { Link } from "react-router-dom";

export const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((obj) => {
      setPokemons(obj);
    });
  }, []);

  return (
    <>
      <ol>
        {pokemons.results?.map((obj) => {
          return (
            <Link to={`/pokedex/${obj.name}`} key={obj.name}>
              <li>{obj.name}</li>
            </Link>
          );
        })}
      </ol>
    </>
  );
};

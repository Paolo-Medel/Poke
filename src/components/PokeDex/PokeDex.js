import { useEffect, useState } from "react";
import "./PokeDex.css";
import { getPokemons } from "../../services/pokedexService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((obj) => {
      setPokemons(obj);
    });
  }, []);

  return (
    <>
      <div className="cardFlex">
        {pokemons.results?.map((obj) => {
          return (
            <Link className="linkBG" to={`/pokedex/${obj.name}`} key={obj.name}>
              <p className="font">{obj.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

import { useEffect, useState } from "react";
import "./PokeDex.css";
import { getPokemons } from "../../services/pokedexService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { imageService } from "../../services/descriptionsService";

export const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    getPokemons().then((obj) => {
      setPokemons(obj);
    });
    imageService().then((obj) => {
      setDescriptions(obj);
    });
  }, []);

  return (
    <div className="pdBG">
      <div className="cardFlex ">
        {descriptions.map((obj) => {
          return (
            <div className="divBG">
              <img
                alt="pokemon"
                src={obj.image}
                style={{ width: 200, marginLeft: 200 }}
              ></img>
              <Link
                className="linkBG"
                to={`/pokedex/${obj.name}`}
                key={obj.name}
              >
                <div className="font">{obj.name}</div>
              </Link>
            </div>
          );
        })}
        {/* {pokemons.results?.map((obj) => {
          return (
          );
        })} */}
      </div>
    </div>
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

import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/pokedex" className="navbar-link">
          PokeDex
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/pokebox" className="navbar-link">
          PokeBox
        </Link>
      </li>
    </ul>
  );
};

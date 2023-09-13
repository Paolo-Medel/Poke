import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/pokedex">PokeDex</Link>
      </li>
      <li className="navbar-item">
        <Link to="/pokebox">PokeBox</Link>
      </li>
    </ul>
  );
};

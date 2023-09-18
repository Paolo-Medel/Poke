import { Button } from "react-bootstrap";
import "./Welcome.css";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <main>
      <div className="bg">
        <audio autoPlay controls>
          <source src="./audio/[YT2mp3.info] - Pokémon Ruby, Sapphire & Emerald - Gym Leader Battle Music (HQ) (128kbps).mp3" />
        </audio>
      </div>
      <p>Welcome to PokeStop!</p>
      <div>
        <p>Paragraph explaining what this site is for</p>
      </div>
      <div>
        <Link to={`/pokebox/`}>
          <Button>Click here to see your Pokemon</Button>
        </Link>
      </div>
      <div>
        <Link to={`/pokedex/`}>
          <Button>Click here to go to the PokeDex</Button>
        </Link>
      </div>
    </main>
  );
};

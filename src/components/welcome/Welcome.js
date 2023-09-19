import { Button, Image } from "react-bootstrap";
import "./Welcome.css";
import { Link } from "react-router-dom";
import mp3_file from "./audio/Red - Pokemon Center.mp3";
import image from "./audio/image.png";
import image1 from "./audio/Welcome-to-PokeStop-9-19-2023.png";

export const Welcome = () => {
  return (
    <div className="bg">
      <main>
        <div>
          <audio src={mp3_file} controls></audio>
        </div>
        <div className="smallBG">
          <Image src={image1}></Image>
          {/* <h1 className="h1Welcome">Welcome to the PokeStop!</h1> */}
          <div className="flexChild">
            <div className="textBox">
              <br></br>
              <br></br>
              <p>
                Hello! My name is Prof Oak! The reason this site exists is for
                trainers to be able to keep track of which Pokemon they have
                caught across all games. Look below for the next steps!
              </p>
            </div>
            <aside className="aside">
              <Image src={image}></Image>
            </aside>
          </div>
          <div className="dialogueBox2">
            <div className="flexChild ">
              <Link to={`/pokebox/`}>
                <button className="button-89">
                  Click here to see your Pokemon
                </button>
              </Link>

              <Link to={`/pokedex/`}>
                <button className="button-89">
                  Click here to go to the PokeDex
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

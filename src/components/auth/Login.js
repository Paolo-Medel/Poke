import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../services/userService";
import { Button, Image } from "react-bootstrap";
import mp3_file from "./audio/Floaroma Town (Night) - Pokémon Diamond_Pearl_Platinum.mp3";
import image from "./audio/PokeStop-9-19-2023.png";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "honey_user",
          JSON.stringify({
            id: user.id,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <div className="gif">
      <main className="container-login">
        <section>
          <form className="form-login" onSubmit={handleLogin}>
            <Image src={image}></Image>
            <h2>Please sign in</h2>
            <fieldset>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(evt) => set(evt.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <button className="login-btn btn-info" type="submit">
                  Sign in
                </button>
              </div>
            </fieldset>
            <fieldset></fieldset>
          </form>
        </section>
        <section>
          <Link to="/register">
            <p className="gba">Not a member yet?</p>
          </Link>
        </section>
        <div>
          <audio src={mp3_file} autoPlay></audio>
        </div>
      </main>
    </div>
  );
};

//

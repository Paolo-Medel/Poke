import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../services/userService";
import { Button, Image } from "react-bootstrap";
import mp3_file from "./audio/Pokémon Ruby, Sapphire & Emerald - Gym Leader Battle Music (HQ).mp3";
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
        <div>
          <audio src={mp3_file} autoPlay controls></audio>
        </div>
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
            </fieldset>
            <fieldset>
              <div className="form-group">
                <Button className="login-btn" type="submit">
                  Sign in
                </Button>
              </div>
            </fieldset>
          </form>
        </section>
        <section>
          <Link to="/register">
            <p class="gba">Not a member yet?</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { PokeDex } from "../components/PokeDex/PokeDex";
import { PokeDexDetails } from "../components/PokeDex/PokeDexDetails";
import { AddToTeam } from "../components/addToTeam/AddToTeam";
import { PokeBox } from "../components/PokeBox/PokeBox";
import { PokeBoxDetails } from "../components/PokeBox/PokeBoxDetails";
import { useEffect, useState } from "react";
import { EditPokeBoxMon } from "../components/PokeBox/editPokeBoxMon";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="pokedex">
          <Route index element={<PokeDex />} />
          <Route path=":pokemonName" element={<PokeDexDetails />} />
          <Route
            path=":pokemonName/AddToTeam"
            element={<AddToTeam currentUser={currentUser} />}
          />
        </Route>
        <Route path="pokebox">
          <Route index element={<PokeBox currentUser={currentUser} />} />
          <Route path=":pokemonName" element={<PokeBoxDetails />} />
          <Route
            path=":pokemonName/edit"
            element={<EditPokeBoxMon currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

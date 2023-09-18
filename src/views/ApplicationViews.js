import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { PokeDex } from "../components/PokeDex/PokeDex";
import { PokeDexDetails } from "../components/PokeDex/PokeDexDetails";
import { AddToTeam } from "../components/addToTeam/AddToTeam";
import { PokeBox } from "../components/PokeBox/PokeBox";
import { PokeBoxDetails } from "../components/PokeBox/PokeBoxDetails";

export const ApplicationViews = () => {
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
          <Route path=":pokemonName/AddToTeam" element={<AddToTeam />} />
        </Route>
        <Route path="pokebox">
          <Route index element={<PokeBox />} />
          <Route path=":pokemonName" element={<PokeBoxDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

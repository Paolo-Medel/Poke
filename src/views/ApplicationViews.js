import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { PokeDex } from "../components/PokeDex/PokeDex";
import { PokeDexDetails } from "../components/PokeDex/PokeDexDetails";
import { AddToTeam } from "../components/addToTeam/AddToTeam";

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
        <Route path="pokebox" element={<>PokeBox</>} />
      </Route>
    </Routes>
  );
};

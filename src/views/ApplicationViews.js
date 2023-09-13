import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";

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
        <Route path="pokedex" element={<>Pokedex</>} />
        <Route path="pokebox" element={<>PokeBox</>} />
      </Route>
    </Routes>
  );
};

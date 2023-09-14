export const addToTeam = (pokemon) => {
  return fetch(`http://localhost:8088/ownedPokemon`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
};

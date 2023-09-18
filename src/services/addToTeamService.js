export const addToTeam = (pokemon) => {
  return fetch(`http://localhost:8088/ownedPokemon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
};

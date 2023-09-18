export const pokeBoxService = () => {
  return fetch(`http://localhost:8088/ownedPokemon?userId=0`).then((res) =>
    res.json()
  );
};

export const getOwnedPokemonByName = (name) => {
  return fetch(`http://localhost:8088/ownedPokemon?name=${name}`).then((res) =>
    res.json()
  );
};

export const deleteOwnedPokemonById = (id) => {
  return fetch(`http://localhost:8088/ownedPokemon/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
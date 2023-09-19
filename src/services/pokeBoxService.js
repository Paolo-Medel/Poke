export const pokeBoxService = (id) => {
  return fetch(`http://localhost:8088/ownedPokemon?userId=${id}`).then((res) =>
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

export const pokeBoxServiceIdAndName = (id, name) => {
  return fetch(
    `http://localhost:8088/ownedPokemon?userId=${id}&name=${name}`
  ).then((res) => res.json());
};

export const editPokeBox = (pokemon) => {
  return fetch(`http://localhost:8088/ownedPokemon/${pokemon.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
};

export const getPokemons = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`).then((res) =>
    res.json()
  );
};

export const getPokemonByName = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json()
  );
};

export const getPokemonDescription = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`).then(
    (res) => res.json()
  );
};

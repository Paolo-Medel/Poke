export const gameService = () => {
  return fetch(`http://localhost:8088/games`).then((res) => res.json());
};

export const gameServiceById = (id) => {
  return fetch(`http://localhost:8088/games?id=${id}`).then((res) =>
    res.json()
  );
};

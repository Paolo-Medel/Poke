export const gameService = () => {
  return fetch(`http://localhost:8088/games`).then((res) => res.json());
};

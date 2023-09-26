export const imageService = () => {
  return fetch(`http://localhost:8088/image`).then((res) => res.json());
};

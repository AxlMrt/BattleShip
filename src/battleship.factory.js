/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export function Ship(name, length) {
  let health = length;
  let isSunk = false;

  const sunk = () => {
    isSunk = true;
    return isSunk;
  };

  // eslint-disable-next-line consistent-return
  const hit = (x = 1) => {
    health -= x;
    if (health <= 0) return sunk();
  };

  return {
    name, length, health, isSunk,
  };
}

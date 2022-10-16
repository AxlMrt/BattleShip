/* eslint-disable import/prefer-default-export */
export function Ship(length) {
  let health = length;
  let isDrown = false;

  const drown = () => {
    isDrown = true;
    return isDrown;
  };

  const dmg = (x = 1) => {
    health -= x;
    if (health <= 0) return drown();
  };

  return { length, health, isDrown };
}

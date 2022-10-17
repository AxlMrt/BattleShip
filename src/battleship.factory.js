/* eslint-disable no-restricted-syntax */
/* eslint-disable for-direction */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export function Ship(name, length) {
  const segments = [];
  let isSunk = false;

  const setSegments = () => {
    for (let i = 0; i < length; i += 1) {
      segments.push({
        segment: i,
        hit: false,
      });
    }
  };

  const sunk = () => {
    let hitCounter = 0;

    for (const segment of segments) {
      if (segment.hit === true) {
        hitCounter += 1;
      }
    }

    if (hitCounter === length) {
      isSunk = true;
    }

    return isSunk;
  };

  const hit = (index) => {
    segments[index].hit = true;
  };

  setSegments();

  return {
    name, length, segments, hit, sunk,
  };
}

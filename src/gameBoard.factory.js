/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import Config from './config';
import { Ship } from './battleship.factory';

export function GameBoard(name) {
  const boardArr = [];
  const ships = [];

  const boardInit = (size) => {
    /* const game = document.getElementById('board'); */
    for (let x = 0; x < size; x += 1) {
      const column = [];
      for (let y = 0; y < size; y += 1) {
        /* const cells = document.createElement('div'); */
        /* game.appendChild(cells); */
        column.push({
          hit: false,
          empty: true,
          coordinates: [x, y],
        });
      }
      boardArr.push(column);
    }
  };

  const addShip = (coords, shipName) => {
    let coordinates = coords;
  };

  boardInit(Config.size);
  return { boardArr };
}

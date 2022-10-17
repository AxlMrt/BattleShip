/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import Config from './config';
import { Ship } from './battleship.factory';

export function GameBoard(name) {
  const boardArr = [];
  const ships = [];

  const boardInit = (size) => {
    for (let x = 0; x < size; x += 1) {
      const column = [];
      for (let y = 0; y < size; y += 1) {
        column.push({
          hit: false,
          empty: true,
        });
      }
      boardArr.push(column);
    }
  };

  const addShip = (coords, ship) => {
    let positionEmpty = true;

    if (coords.length !== ship.length) {
      return false;
    }

    coords.forEach((coordinate) => {
      const [xCoord, yCoord] = coordinate;
      const position = boardArr[xCoord][yCoord];

      if (!position.empty) {
        positionEmpty = false;
        return positionEmpty;
      }
    });

    if (positionEmpty) {
      for (let i = 0; i < coords.length; i += 1) {
        const xCoord = coords[i][0];
        const yCoord = coords[i][1];
        const position = boardArr[xCoord][yCoord];
        position.empty = false;
        position.ship = ship;
        position.shipSegment = ship.segments[i].segment;
      }
      ships.push(ship);
      return true;
    }
  };

  boardInit(Config.size);
  return { boardArr, addShip };
}

/* eslint-disable no-undef */
import { Ship } from './battleship.factory';

test('Create a ship object', () => {
  expect(Ship('Carrier', 5)).toEqual({
    name: 'Carrier', length: 5, health: 5, isSunk: false,
  });
});

test('Create a ship object', () => {
  expect(Ship('Destroyer', 2)).toEqual({
    name: 'Destroyer', length: 2, health: 2, isSunk: false,
  });
});

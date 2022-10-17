/* eslint-disable no-undef */
import { Ship } from './battleship.factory';

test('Correct ship name', () => {
  const newShip = Ship('Carrier', 5);
  expect(newShip.name).toBe('Carrier');
});

test('Correct ship length', () => {
  const newShip = Ship('Destroyer', 2);
  expect(newShip.length).toEqual(2);
});

test('Ship is not sunk', () => {
  const newShip = Ship('Cruiser', 3);
  expect(newShip.sunk()).toBe(false);
});

test('Ship is not sunk after being hit', () => {
  const newShip = Ship('Battleship', 4);
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.sunk()).toBe(false);
});

test('Ship is sunk', () => {
  const newShip = Ship('Destroyer', 2);
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.sunk()).toBe(true);
});

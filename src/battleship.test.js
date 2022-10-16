/* eslint-disable no-undef */
import { Ship } from './battleship.factory';

test('Create a ship object', () => {
  expect(Ship(5)).toEqual({ length: 5, health: 5, isDrown: false });
});

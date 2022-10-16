/* eslint-disable no-undef */
import { GameBoard } from './gameBoard.factory';

test('Create a new board', () => {
  const newBoard = GameBoard('player1');
  expect(newBoard.boardArr[0][0].empty).toBe(true);
});

test('Gameboard create 10 * 10 board', () => {
  const newBoard = GameBoard('player1');
  expect(newBoard.boardArr[0][10]).toBe(undefined);
  expect(newBoard.boardArr[0][9].empty).toBe(true);
});

test('Create new ship', () => {
  const newBoard = GameBoard('player1');
  const newShip = Ship('3', 'Destroyer');
  expect(newBoard.addShip({
    [
      [0, 0]
      [0, 1]
      [0, 2]
    ],
    newShip
  })
  )
});

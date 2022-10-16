/* eslint-disable no-console */
import { GameBoard } from './gameBoard.factory';

const newGame = GameBoard('player1');
console.log(newGame.boardArr);

const test = document.querySelector('.content');
console.log(test);

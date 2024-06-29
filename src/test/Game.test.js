const Player = require('./../../src/Player');
const Game = require('./../../src/Game');
const assert = require('assert');

describe('Game', () => {
  it('should declare a winner', () => {
    const player1 = new Player('Player 1', 50, 5, 10);
    const player2 = new Player('Player 2', 50, 5, 10);
    const game = new Game(player1, player2);
    game.playGame();
    assert(player1.isAlive() || player2.isAlive());
  });
});

const Player = require('./Player');
const Game = require('./Game');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const game = new Game(playerA, playerB);
game.playGame();

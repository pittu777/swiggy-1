const Player = require('./Player');

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  playTurn(attacker, defender) {
    if (attacker.isAlive() && defender.isAlive()) {
      attacker.attackOpponent(defender);
    }
  }

  playGame() {
    let attacker, defender;

    while (this.player1.isAlive() && this.player2.isAlive()) {
      if (this.player1.health <= this.player2.health) {
        attacker = this.player1;
        defender = this.player2;
      } else {
        attacker = this.player2;
        defender = this.player1;
      }

      this.playTurn(attacker, defender);
      [attacker, defender] = [defender, attacker];
    }

    const winner = this.player1.isAlive() ? this.player1.name : this.player2.name;
    console.log(`Winner: ${winner}`);
  }
}

module.exports = Game;

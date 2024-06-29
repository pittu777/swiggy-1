const Player = require('./../../src/Player');
const assert = require('assert');

describe('Player', () => {
  it('should create a player with correct attributes', () => {
    const player = new Player('Test', 100, 10, 5);
    assert.strictEqual(player.health, 100);
    assert.strictEqual(player.strength, 10);
    assert.strictEqual(player.attack, 5);
  });

  it('should reduce health when attacked', () => {
    const attacker = new Player('Attacker', 100, 10, 10);
    const defender = new Player('Defender', 100, 5, 5);
    attacker.attackOpponent(defender);
    assert(defender.health < 100);
  });
});

class Player {
    constructor(name, health, strength, attack) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    isAlive() {
      return this.health > 0;
    }
  
    attackOpponent(defender) {
      const attackRoll = this.rollDice();
      const damage = this.attack * attackRoll;
      defender.defend(damage);
    }
  
    defend(damage) {
      const defenseRoll = this.rollDice();
      const defendedDamage = this.strength * defenseRoll;
      const netDamage = Math.max(0, damage - defendedDamage);
      this.health -= netDamage;
    }
  
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  
  module.exports = Player;
  
class Goblin {
    constructor(hitPoints, expPoints) {
      this.hitPoints = hitPoints;
      this.expPoints = expPoints;
    }
  }
  
  
  // Math.floor style here cause rounding DOWN !- 11:25am
  function generateGoblins() {
  // Roll a 6-sided die (cause there is only one, haha !) and multiply by 2
    const howManyGoblins = (Math.floor(Math.random() * 6) + 1) * 2; 
    const goblins = [];
  
    for (let i = 0; i < howManyGoblins; i++) {
  // Roll two 6-sided die and add them
      const hitPoints = rollDie(6) + rollDie(6); 
  // Half of hitPoints, rounded down
      const expPoints = Math.floor(hitPoints / 2); 
      goblins.push(new Goblin(hitPoints, expPoints));
    }
  
    return goblins;
  }
  
  /* Zee helper function to roll a die (cause there is only one) with given sides keeping classic rpg if want to use another sided die. */
  function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  const goblins = generateGoblins();
  console.log(goblins);
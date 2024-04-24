// readline for game import here!!!!!
//https://nodejs.org/api/readline.html#readline
const readline = require('readline');

class Attack {
// constructor with default 0
    constructor(armorClass = 0) {
        this.armorClass = armorClass;
        this.rollResult = 0;
// readline object
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    rollDice() {
        this.rollResult = Math.floor(Math.random() * 20) + 1;
    }

    attack() {
        this.rollDice();
// use ternary for logic or if else if you can't figure it out
        return this.rollResult === 1
            ? "You slipped and fell while attacking, how embarrassing."
            : this.rollResult === 20
            ? "Critical hit!"
            : (this.rollResult - this.armorClass) >= 10
            ? "Your attack was successful, you're awesome!"
            : "Your attack failed, please try again!";
    }
// to make the challenge more interactive, use rl with promise method here-menoko og 11:21am
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    async playTurn() {
        return new Promise(resolve => {
            this.rl.question("Do you want to reroll? (y/n) ", answer => {
                resolve(answer.toLowerCase() === "y" ? this.attack() : "End game");
                this.rl.close(); // Close readline interface after each turn!!!!
            });
        });
    }
// this is to reset the game and armour class
    newGame(armorClass = 0) {
        this.armorClass = armorClass;
        this.rollResult = 0;
    }
}
// aysnc here for main game loop to fix game bug dude! 12:35pm

async function main() {
    const battle = new Attack();
    battle.newGame(); // Reset the game state before starting
    let result = await battle.attack()
    while (result !== "End game") {
        console.log(result)
        result = await battle.playTurn();
        if (result !== "End game") {
// put interface here in loop!!!!
            battle.rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
        }
    }
}
// call the game, yeah!!!!
main();
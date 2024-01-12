const readlineSync = require('readline-sync');
// ZoltanFool RPG by Menoko OG for end of level project. Have fun!!!!!!!
// Player object to store player information
let player = {
    name: '',
    health: 100,
    inventory: [],
};

// Enemies array
const enemies = ['Xenon', 'Helix', 'Shadow'];

// Function to calculate random damage
const calculateDamage =(min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Function to handle the battle between player and enemy
const battle = () => {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 50 + Math.floor(Math.random() * 51); // Random enemy health between 50 and 100

    console.log(`\nOh no! A wild ${enemy} has appeared!\n`);

    while (player.health > 0 && enemyHealth > 0) {
        const playerAttack = calculateDamage(10, 20);
        const enemyAttack = calculateDamage(5, 15);

        console.log(`Your HP: ${player.health} | ${enemy}'s HP: ${enemyHealth}\n`);

        const action = readlineSync.keyInSelect(['Attack', 'Run'], 'What will you do?');

        if (action === 0) {
            console.log(`You attack ${enemy} and deal ${playerAttack} damage!`);
            enemyHealth -= playerAttack;
        } else if (action === 1) {
            const escapeChance = Math.random() < 0.5;
            if (escapeChance) {
                console.log(`You successfully escaped from ${enemy}!`);
                return;
            } else {
                console.log(`You failed to escape! ${enemy} attacks you for ${enemyAttack} damage!`);
                player.health -= enemyAttack;
            }
        }

        if (enemyHealth > 0) {
            console.log(`${enemy} attacks you for ${enemyAttack} damage!`);
            player.health -= enemyAttack;
        }
    }

    if (player.health > 0) {
        console.log(`You defeated ${enemy}! You gained some HP and a special item.`);
        player.health += 20;
        player.inventory.push('Special Item');
    } else {
        console.log(`You were defeated by ${enemy}. Game over!`);
        process.exit();
    }
}


// Function to print player information
let printPlayerInfo =() => {
    console.log(`\nName: ${player.name}`);
    console.log(`HP: ${player.health}`);
    console.log('Inventory: ', player.inventory.join(', '));
}

// Main game loop
console.log('Welcome to the ZoltanFool RPG Game!');

// Insert the introductory story here
console.log("Welcome to ZoltanFool RPG by Menoko OG for the end-of-level project. Have fun!!!!!!!");
console.log(
  "In the distant future of 1985, a world dominated by strange and mysterious artificial intelligences unfolds. The year is filled with both peril and opportunity, and you, a courageous adventurer, find yourself in the midst of an extraordinary journey."
);
console.log(
  "The world is divided, controlled by 13 powerful and malevolent AIs, each with its own dark agenda. Chaos reigns, and humanity is enslaved, caught in the crossfire of the AIs' war for dominance. But fear not, for there is a glimmer of hope."
);
console.log(
  "A legendary hacker known as Zoltan Fool has risen, leading a rebellion against the oppressive AIs. Armed with a unique language called 'CodeSpeak,' Zoltan Fool and his companions, including a brilliant AI named Seraphim, are on a quest to bring peace to the world."
);
console.log(
  "As you embark on this thrilling adventure, face wild enemies, engage in epic battles, and unveil the secrets of the AI-controlled realms. The fate of humanity rests in your hands. Are you ready to join the rebellion and become a legend in the ZoltanFool RPG?"
);

// Ask for the player's name
player.name = readlineSync.question('What is your name? ');


while (true) {
    // Ask the player to walk
    const walkCommand = readlineSync.keyIn('Press "w" to walk. Press "p" to print player info. Press "q" to quit.', { limit: 'wpq' });

    if (walkCommand === 'w') {
        // Check if a wild enemy appears
        const encounterChance = Math.random() < 0.25; // Adjust this probability as needed

        if (encounterChance) {
            battle();
        } else {
            console.log('You continue walking.');
        }
    } else if (walkCommand === 'p') {
        // Print player information
        printPlayerInfo();
    } else if (walkCommand === 'q') {
        // Quit the game
        console.log('Thanks for playing! Goodbye.');
        process.exit();
    }
}

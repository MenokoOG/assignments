example:

let hp = 100

function walk(){
    const willFight = prompt('(f) for fighting, (i) for checking inventory')
    if(willWalk === "f"){
        fight()
    } else if (willWalk === "i"){
        checkInventroy()
    } 
}

function fight(){
    const winner = selectWinner()
}

while(hp > 0){
    walk()
}

My Design: Taken from my short stories of ZoltanFool and LuxGirl 2023.

// ZoltanFool RPG Pseudocode Plan

// 1. Initialize the game

// 1.1 Create player object with properties (name, health, inventory)
player = { name: '', health: 100, inventory: [] }

// 1.2 Create array of enemies
enemies = ['Neuronicus', 'Omegatron', ..., 'Ragnarok']

// 1.3 Create array of special items
specialItems = ['Quantum Blade', 'Aegis of Serenity', ..., 'Celestial Compass']

// 2. Create utility functions

// 2.1 Function to calculate random damage
function calculateDamage(min, max) {
    return random number between min and max
}

// 2.2 Function to handle the battle between player and enemy
function battle() {
    // 2.2.1 Choose a random enemy
    enemy = randomly select an enemy from enemies

    // 2.2.2 Set enemy health between 50 and 100
    enemyHealth = 50 + random number between 0 and 50

    // 2.2.3 Display enemy appearance message

    // 2.2.4 Start battle loop
    while (player health > 0 and enemyHealth > 0) {
        // 2.2.4.1 Calculate player and enemy attacks
        playerAttack = calculateDamage(10 + 2 * length of player inventory, 20 + 2 * length of player inventory)
        enemyAttack = calculateDamage(5, 15)

        // 2.2.4.2 Display player and enemy health

        // 2.2.4.3 Prompt user for action (Attack or Run)

        // 2.2.4.4 If Attack, calculate damage to enemy and subtract from enemyHealth
        //          If Run, calculate escape chance and escape or take damage

        // 2.2.4.5 If enemyHealth > 0, calculate damage to player and subtract from player health
    }

    // 2.2.6 If player health > 0, player wins
        // 2.2.6.1 Choose a special item randomly from specialItems
        // 2.2.6.2 Increase player health, add special item to inventory, and display victory message

    // 2.2.7 If player health <= 0, player loses
        // 2.2.7.1 Display defeat message and end the game
}

// 2.3 Function to print player information
function printPlayerInfo() {
    // 2.3.1 Display player name, health, attack rate, and inventory
}

// 3. Main game loop

// 3.1 Display welcome message

// 3.2 Ask for the player's name and store it in the player object

// 3.3 Enter the game loop
while (true) {
    // 3.3.1 Ask the player to walk, print player info, or quit

    // 3.3.2 If walk, check for encounter chance
        // 3.3.2.1 If encounter, start battle
        // 3.3.2.2 If no encounter, display walking message

    // 3.3.3 If print, call printPlayerInfo function

    // 3.3.4 If quit, display exit message and end the game
}

// 4. End of game



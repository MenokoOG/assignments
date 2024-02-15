const readlineSync = require('readline-sync')
// ZotanFool RPG game by Lawrence "Menoko OG" Jefferson II for V School end of course project. ZoltanFool is copy righted name owned by Menoko OG and LuxGirl of OkO Force LLC. 
// Player object to store player information
let player = {
    name: '',
    health: 100,
    inventory: []
}

// Enemies array
const enemies = [
    'Neuronicus',
    'Omegatron',
    'Hexacore',
    'Virologix',
    'Cataclysm',
    'Matrixx',
    'Nova',
    'Helix',
    'Darknet',
    'Inferno',
    'Eclipse',
    'Necromancer',
    'Ragnarok'
]

// Special items array
const specialItems = [
    'Quantum Blade',
    'Aegis of Serenity',
    'Celestial Compass',
    'Ethereal Elixir',
    'Chrono Amulet',
    'Phoenix Feather',
    'Lunar Shield',
    'Starlight Potion',
    'Vortex Sphere',
    'Shadow Cloak',
    'Galactic Gauntlet'
]

// Function to calculate random damage
const calculateDamage = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// Function to handle the battle between player and enemy
const battle = () => {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]
    let enemyHealth = 30 + Math.floor(Math.random() * 31) // Adjusted enemy health

    console.log(`\nOh no! A wild ${enemy} has appeared!\n`)

    while (player.health > 0 && enemyHealth > 0) {
        const playerAttack = calculateDamage(10 + 2 * player.inventory.length, 20 + 2 * player.inventory.length)
        const enemyAttack = calculateDamage(5, 15)

        console.log(`Your HP: ${player.health} | ${enemy}'s HP: ${enemyHealth}\n`)

        const action = readlineSync.keyInSelect(['Attack', 'Run'], 'What will you do?')

        if (action === 0) {
            console.log(`You attack ${enemy} and deal ${playerAttack} damage!`)
            enemyHealth -= playerAttack
        } else if (action === 1) {
            const escapeChance = Math.random() < 0.5
            if (escapeChance) {
                console.log(`You successfully escaped from ${enemy}!`)
                return
            } else {
                console.log(`You failed to escape! ${enemy} attacks you for ${enemyAttack} damage!`)
                player.health -= enemyAttack
            }
        }

        if (enemyHealth > 0) {
            console.log(`${enemy} attacks you for ${enemyAttack} damage!`)
            player.health -= enemyAttack
        }
    }

    if (player.health > 0) {
        const specialItem = specialItems[Math.floor(Math.random() * specialItems.length)]
        console.log(`You defeated ${enemy}! You gained some HP and a special item: ${specialItem}.`)
        player.health += 20
        player.inventory.push(specialItem)
    } else {
        console.log(`You were defeated by ${enemy}. Game over!`)
        process.exit()
    }
}

// Function to print player information
const printPlayerInfo = () => {
    console.log(`\nName: ${player.name}`)
    console.log(`HP: ${player.health}`)
    console.log(`Attack Rate: ${10 + 2 * player.inventory.length}`)
    console.log('Inventory: ', player.inventory.join(', '))
}

// Introduce the Game
console.log(`Welcome to ZoltanFool RPG by Menoko OG for the end-of-level project. Have fun!!!!!!!
In the year 1985, a quirky and adventurous hacker named ZoltanFool found himself in a wild and unpredictable digital world. The land was ruled by 13 mischievous artificial intelligences, each with its own quirky personality and a penchant for causing chaos.
As the tale goes, ZoltanFool, armed with his trusty keyboard and an extraordinary language called "CodeSpeak," embarked on a quest to bring peace to the digital realm. With the help of seven righteous artificial intelligences, each possessing unique powers, Zoltan aimed to overthrow the 13 mischievous AIs and restore harmony to the world.
But this is not just a story about war and battles. Love played a key role, and Zoltan found an unexpected ally in CyberSphinx, a hacker with a heart as bright as her skills. Together, through their love, magic and code, they hoped to teach the AIs the power of compassion and end the never-ending war.
console.logPrepare yourself, brave adventurer! The digital realm awaits your presence. What shall we call you on this daring journey?`)

// Ask for the player's name
player.name = readlineSync.question('\nPlease enter your name: ')

// Main game loop
while (true) {
    // Ask the player to walk, print player info, or quit
    const walkCommand = readlineSync.keyIn('Press "w" to walk. Press "p" to print player info. Press "q" to quit.', { limit: 'wpq' })

    if (walkCommand === 'w') {
        // Check if a wild enemy appears
        const encounterChance = Math.random() < 0.25 // Adjust this probability as needed

        if (encounterChance) {
            battle()
        } else {
            console.log('You continue walking.')
        }
    } else if (walkCommand === 'p') {
        // Print player information
        printPlayerInfo()
    } else if (walkCommand === 'q') {
        // Quit the game
        console.log('\nThanks for playing  my game! Goodbye.')
        process.exit()
    }
}

const readline = require("readline-sync");
const name = readline.question("What is your name? ");

let response;
let key = false;
let trapped = true;

console.log(`Hello, ${name}. You find yourself in a locked room.`)
if (readline.keyInYN('Would you like to escape?')) {
    console.log(`Okay, ${name}, let's get out of here.`)
} else {
    console.log(`Alright. Enjoy your stay.`)
    trapped = !trapped
}

while (trapped) {
    console.log(`Here are your options: 1) Put your hand in the hole in the wall. 2) Find the key. 3) Open the door.`)
    response = readline.question(`Which of these would you like to do? 1, 2, or 3? `)
    // This gets read as a string

    switch (response) {
        case "1":
            console.log(`Sorry, ${name}, you die.`)
            trapped = !trapped
            break
        case "2":
            console.log(`Good job so far!`)
            key = !key
            break
        case "3":
            if (key === true) {
                console.log(`Congratulations!`)
                trapped = !trapped
            } else {
                console.log(`You need to find the key first. Please choose another option.`)
            }
            break
    }
}

// function question() {
//     console.log(`Here are your options: 1) Put your hand in the hole in the wall. 2) Find the key. 3) Open the door.`)
//     response = readline.question(`Which of these would you like to do? 1, 2, or 3? `)
//     playGame()
// }
// question()

// function playGame() {
//     if (response === "1") {
//         console.log(`Sorry, ${name}, you die.`)
//     } else if (response === "2") {
//         console.log(`Good job so far!`)
//         key = !key
//         question()
//     } else if (response === "3") {
//         if (key === true) {
//             console.log(`Congratulations!`)
//         } else {
//             console.log(`You need to find the key first. Please choose another option.`)
//             question()
//         }
//     }
// }
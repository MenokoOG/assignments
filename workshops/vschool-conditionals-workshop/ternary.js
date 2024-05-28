// Imagine we're building a simple chat app where users can see each other's status as online or offline. We want to display the correct status based on whether the user is connected to the chat server or not.


let userStatus;
let isOnline = true;

if (isOnline) {
    userStatus = 'Online';
} else {
    userStatus = 'Offline';
}

console.log(`User is currently ${userStatus}.`); // Outputs: Online

// The variable 'isOnline' holds a boolean value true or false (get this from other functionality in the app, function, etc)
// ex. let isOnline = getOnlineStatus();
// Then the userStatus will get updated to online or offline depending on that variable.

// we can write if(isOnline===true), but we don't need to.



// compare to simpler ternary
// let isOnline = true;
// let userStatus = isOnline ? 'Online' : 'Offline';

// console.log(userStatus); // Outputs: Online

// The above ternary will assign a value to the variable 'userStatus' based on the value of the 'isOnline' variable
// the ternary operator (shorthad for an if/else statement) evaulates the condition 'isOnline' - which will evaluate to either true or false



// Other exmamples:

// assigning a default value
let userInput = '';
let output = userInput ? userInput : 'Default Value';
console.log(output); // Outputs: Default Value


// conditional class assigment
let isActive = true;
let className = isActive ? 'active' : 'inactive';
console.log(className); // Outputs: active


// displaying a message based on a condition
let score = 85;
let result = score >= 60 ? 'Pass' : 'Fail';
console.log(result); // Outputs: Pass








// example with toggle
// in the HTML we have a button with the id="toggleButton"
// in the CSS we define two styles
// .dark-mode {
//     background-color: black;
//     color: white;
// }
// .light-mode {
//     background-color: white;
//     color: black;
// }


let isDarkMode = false; // Initial mode

function toggleMode() {
    isDarkMode = !isDarkMode; // Toggle the boolean value
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'; // Use ternary to set class
}

// Set initial mode
document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

// Add event listener to the button
document.getElementById('toggleButton').addEventListener('click', toggleMode);
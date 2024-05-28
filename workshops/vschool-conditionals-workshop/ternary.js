let isOnline = true;
let userStatus;

if (isOnline) {
    userStatus = 'Online';
} else {
    userStatus = 'Offline';
}

console.log(userStatus); // Outputs: Online



// compare to simpler ternary
// let isOnline = true;
// let userStatus = isOnline ? 'Online' : 'Offline';

// console.log(userStatus); // Outputs: Online





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
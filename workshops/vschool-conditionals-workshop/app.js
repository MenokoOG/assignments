let temperature;
// ! checks for more than one condition
if (!temperature) {
    console.log("No temperature reading.")
} else if (temperature > 80) {
    console.log("It's too hot fool!");
}
else if (temperature < 60) {
    console.log("It's too cold fool!");
} else { 
    console.log("The weather is perfect fool!");
}

console.log(temperature)

// Putting the if/else block into a function.
function checkWeather(temp) {
    let temperature = temp;
    
    if (!temperature) {
        console.log("Thermometer is broken.");
    } else if (temperature > 80) {
        console.log("It's too hot outside.");
    } else if (temperature < 60) {
        console.log("It's too cold outside.");
    } else {
        console.log("The weather is perfect.");
    }
}

// // Example usage:
checkWeather(85);  // Output: "It's too hot outside."
checkWeather(58);  // Output: "It's too cold outside."
checkWeather(75);  // Output: "The weather is perfect."
checkWeather(null);  // Output: "Thermometer is broken."

// let userStatus;
// let isOnline = true;

// if (isOnline) {
//     userStatus = 'Online';
// } else {
//     userStatus = 'Offline';
// }

// console.log(`User is currently ${userStatus}.`); // Outputs: Online

let isOnline = true;
let userStatus = isOnline ? 'Online' : 'Offline';

console.log(userStatus); // Outputs: Online
console.log(`User is currently ${userStatus}.`); // Outputs: Online


let day = 5;
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

// putin our switch statement into a function

function getDayName(day) {
    let dayName;
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }
    console.log(dayName);
}

// // Example usage:
getDayName(3);  // Output: "Wednesday"
getDayName(0);  // Output: "Sunday"
getDayName(7);  // Output: "Invalid day"

// We can have intentional fall-through
// example, to group multiple cases that should result in the same outcome
let fruit = 'banana';

switch (fruit) {
    case 'apple':
    case 'banana':
    case 'cherry':
        console.log('This is a fruit.');
        break;
    default:
        console.log('Unknown item.');
}

// all three examples fall through to the same block of code

function checkConditions(value1, value2) {
    switch (true) {
        case value1 === 'A' && value2 === 1:
            console.log('Condition 1 met: value1 is A and value2 is 1');
            break;
        case value1 === 'B' && value2 === 2:
            console.log('Condition 2 met: value1 is B and value2 is 2');
            break;
        case value1 === 'C' || value2 === 3:
            console.log('Condition 3 met: value1 is C or value2 is 3');
            break;
        default:
            console.log('No conditions met');
    }
}

// Example usage:
checkConditions('A', 1); // Output: Condition 1 met: value1 is A and value2 is 1
checkConditions('B', 2); // Output: Condition 2 met: value1 is B and value2 is 2
checkConditions('C', 3); // Output: Condition 3 met: value1 is C or value2 is 3
checkConditions('D', 4); // Output: No conditions met
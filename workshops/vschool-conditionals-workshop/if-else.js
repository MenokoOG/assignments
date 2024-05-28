// We're writing a weather app that displays a message based on the current temperature. We'll have output for if there's no reading, if it's too hot, too cold, or if the weather is perfect. 


// start with just let temperature;
// Here, the variable is declared but not defined, we don't give it an initial value. It exists, but its value is 'undefined' (we can see that if we console.log it).

// In our if/else block, first we'll check if temperature is defined.
// (!temperature) checks if temperature is undefined or null

// We'll first check for too hot, then too cold, then if none of the conditions are met, the console.log will read "The weather is perfect".

// For example, we can assign temperature a value, like 52 or 75.


let temperature;
// temperature = 90;

if(!temperature) {
    console.log("No temperature reading.")
} else if (temperature > 80) {
    console.log("It's too hot outside.");
} else if (temperature < 60) {
    console.log("It's too cold outside.");
} else {
    console.log("The weather is perfect.");
}


console.log(temperature)
// write an 'if/else' statement that checks if a number is positive, negative, or zero
let number = 0; // replace with your number

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}




// Putting the if/else block into a function.
// function checkWeather(temp) {
//     let temperature = temp;
    
//     if (!temperature) {
//         console.log("Thermometer is broken.");
//     } else if (temperature > 80) {
//         console.log("It's too hot outside.");
//     } else if (temperature < 60) {
//         console.log("It's too cold outside.");
//     } else {
//         console.log("The weather is perfect.");
//     }
// }

// // Example usage:
// checkWeather(85);  // Output: "It's too hot outside."
// checkWeather(58);  // Output: "It's too cold outside."
// checkWeather(75);  // Output: "The weather is perfect."
// checkWeather(null);  // Output: "Thermometer is broken."



// Adding specific/exact conditions.
// function checkWeather(temp) {
//     let temperature = temp;
    
//     if (!temperature) {
//         console.log("Thermometer is broken.");
//     } else if (temperature === 80) {
//         console.log("It's exactly 80 degrees outside, quite warm!");
//     } else if (temperature > 80) {
//         console.log("It's too hot outside.");
//     } else if (temperature === 60) {
//         console.log("It's exactly 60 degrees outside, a bit chilly!");
//     } else if (temperature < 60) {
//         console.log("It's too cold outside.");
//     } else {
//         console.log("The weather is perfect.");
//     }
// }

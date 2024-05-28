// switch statements handle multiple cases and execute different blocks of code based on the value of a variable.
// We're comparing a single expression against multiple values.

// Imagine we're developing a calendar app that needs to display the name of the day based on a number provided by the user (or other functionality within the app, like the built-in newDate().getDay() method.)

// first, we'll declare a variable day, and let's give it an initial value of three
// then we declare a variable 'dayName' to store the name of the day.

// We set up our switch statement with the keyword switch, and then in the parenthese we put what we want to be evaluated, in this case the variable day.
// then we open our curly braces and start writing the code for each case.
// Add the console.log for dayName underneath.
// start with 0, then a colon, then we assign the dayName to Sunday.
// Then include the break keyword to prevent fall-through (explain more about that). The code will exit the switch block after the match case is executed.

// Copy paste the rest, then add a default.
// The default is to hanlde any case that doesn't match.



let day = 3;
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


// This could also be written to evaluate an expression with simple logic
// using the built-in JS method new Date() that creates a new Date object
// and .getDay() that returns an integer corresponding to the day of the week


// let today;

// function getDayName() {
//     switch (new Date().getDay()) {
//     case 0:
//         today = "Sunday";
//         break;
//     case 1:
//         today = "Monday";
//         break;
//     case 2:
//         today = "Tuesday";
//         break;
//     case 3:
//         today = "Wednesday";
//         break;
//     case 4:
//         today = "Thursday";
//         break;
//     case 5:
//         today = "Friday";
//         break;
//     case 6:
//         today = "Saturday";
//         break;
//     default:
//         today = "Unknown Day";
//     }
// }
// getDayName();
// console.log(today);



// We can also put this in a function
// function getDayName(day) {
//     let dayName;
//     switch (day) {
//         case 0:
//             dayName = "Sunday";
//             break;
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//         default:
//             dayName = "Invalid day";
//     }
//     console.log(dayName);
// }

// // Example usage:
// getDayName(3);  // Output: "Wednesday"
// getDayName(0);  // Output: "Sunday"
// getDayName(7);  // Output: "Invalid day"







// write a 'switch' statement that assigns a grade based on a score
// output A, B, C, or D
// uses switch(true)

// instead of comparing a single value to multiple cases, switch(true) allows each case to be a boolean expression
// then each case statement contains a condition that evaluates to true or false
// the switch statement then compares the boolean value 'true' against each case
// if a case's condition evaluates to true, that block of code is executed


function getLetterGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
            break;
    }

    return grade;
}

console.log(getLetterGrade(95)); // Outputs: A
console.log(getLetterGrade(82)); // Outputs: B
console.log(getLetterGrade(75)); // Outputs: C
console.log(getLetterGrade(63)); // Outputs: D
console.log(getLetterGrade(50)); // Outputs: F


// This could be written as an if/else:
// function getLetterGrade(score) {
//     let grade;

//     if (score >= 90) {
//         grade = 'A';
//     } else if (score >= 80) {
//         grade = 'B';
//     } else if (score >= 70) {
//         grade = 'C';
//     } else if (score >= 60) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }

//     return grade;
// }

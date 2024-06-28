
// test of giggle
// 1. Variables and Data Types:
// Variables: Used to store information. let allows reassignment, and const is for constant values.

// Data Types: Types of values you can store.

let name = "John"; // String
const age = 25;    // Number

let isStudent = true;   // Boolean
let score = 92.5;       // Float (Decimal)


// 2. Functions:
// Function Definition: Block of code designed to perform a specific task.
// Function Expression: Assigning a function to a variable.
function greet(name) {
    console.log("Hello, " + name + "!");
}

const multiply = function(a, b) {
    return a * b;
};

// 3. Arrays:
// Array: Ordered list of values.

let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red

// 4. Objects:
// Object: Collection of key-value pairs.

let person = {
    name: "Bob",
    age: 30,
    isStudent: false
};

console.log(person.name); // Output: Bob

// 5. Conditional Statements:
// if-else: Makes decisions based on conditions.

let hour = 15;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// 6. Loops:
// For Loop: Repeats code a specific number of times.
// While Loop: Repeats code while a condition is true.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}

// 7. DOM Manipulation:
// Get Element by ID: Access HTML elements by their ID.
// Event Handling: Responding to user actions.
// Changing Content: Dynamically updating HTML content.

const element = document.getElementById("myElement");

element.addEventListener("click", function() {
    console.log("Element clicked!");
});

element.innerHTML = "New content";

// 8. ES6 Features:
// Arrow Functions: A concise way to write functions.
// Template Literals: Easier string interpolation.
// Destructuring: Extracting values from objects or arrays.

const add = (a, b) => a + b;

let message = `Hello, ${name}!`;

const { property } = myObject;

// 9. Classes and Objects:
// Class: Blueprint for creating objects.
// Object Instantiation: Creating an object from a class.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Alice", 28);

// 10. Promises:
// Promise: Handles asynchronous operations more easily.

const fetchData = () => {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve(data);
        } else {
            reject(error);
        }
    });
};


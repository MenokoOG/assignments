function checkNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return num + " isn't a number fool, it's a " + typeof num + "!";
    } else {
        return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    }
}

console.log(checkNumber(5));            // Output: "positive"
console.log(checkNumber(-10));          // Output: "negative"
console.log(checkNumber(0));            // Output: "zero"
console.log(checkNumber("is this a number?"));   // Output: "is this a number? isn't a number fool, it's a string!"
console.log(checkNumber({}));   // Output: "[object Object] isn't a number fool, it's a object!" 
console.log(checkNumber(true));  // Output: "true isn't a number fool, it's a boolean!"
console.log(checkNumber(undefined));  // Output: "undefined isn't a number fool, it's a undefined!"
console.log(checkNumber(null));   // Output: "null isn't a number fool, it's a object!"
console.log(checkNumber(+null)); // Output: "zero" 
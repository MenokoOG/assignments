// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
}
sum(3, 5)
sum(-1, -1)

// Write a function that accepts three numbers as parameters, 
// and returns the largest of those numbers.
function largestNum(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
largestNum(5, 2, 6)
largestNum(499, -500, 450)

// Write a function that accepts one number as a parameter, 
// and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(num){
    return num % 2 === 0 ? "even" : "odd"
}
evenOrOdd(3)
evenOrOdd(10)
// Write a function that accepts a string as a parameter. 
// If the length of the string is less than or equal to twenty characters long, 
// return the string concatenated with itself (string + string). If the string 
// is more than twenty characters long, return the first half of the string.
function manipulateString(str){
    if (str.length <= 20) {
        return str + str
    } else {
        return str.substring(0, Math.floor(str.length / 2))
    }
}
manipulateString("Howdy!")
manipulateString("Whatever shall we do about this?")


// Optional Challenges //

// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.
function printFibonacciNum(n){
    let fib = [1, 1]; // Starting with the first two Fibonacci numbers
    let sum = 2; // Sum starts with the first two numbers (1 + 1)
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
        sum += fib[i];
    }
    return sum;
}
printFibonacciNum(5)
printFibonacciNum(20)

// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string.
// *White spaces count as a character*
function mostFrequentLetter(string){
    let charMap = {}
    for (let char of string) {
        if (char in charMap) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    let maxCount = 0
    let mostFrequentChar = " "
    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char]
            mostFrequentChar = char
        }
    }
    return mostFrequentChar
}
            expect(mostFrequentLetter("whatever")).toBe("e")
mostFrequentLetter("whatever")
mostFrequentLetter("what is your quest?")




module.exports = {
    sum,
    largestNum,
    evenOrOdd,
    manipulateString,
    printFibonacciNum,
    mostFrequentLetter
}

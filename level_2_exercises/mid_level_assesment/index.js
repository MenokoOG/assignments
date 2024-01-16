// mid-level assessment, menoko og, 1-16-24
//Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

const numbers = [4, 2, 7, 1, 9, 5]
// sorting the given array of numbers with .sort() method
const sortedNumbers = numbers.sort()
// logging the result 
console.log(sortedNumbers)

console.log("**************************************")
// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

const strings = ['hello', 'world', 'javascript']
// Arrow function that takes an array and returns a new array with strings converted to uppercase
const convertToUpperCaseArray = (arr) => {
    // Using the map method to apply the provided function to each element in the array
    return arr.map(str => str.toUpperCase())
}

// Calling the function with the original array
const uppercaseStrings = convertToUpperCaseArray(strings)

// Logging the result to the console
console.log(uppercaseStrings)

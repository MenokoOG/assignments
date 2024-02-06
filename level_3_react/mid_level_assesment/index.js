// Mid level challenges.

// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.


function solution(a) {
    const nonNegativeValues = a.filter(val => val !== -1)
    const sortedNonNegativeValues = nonNegativeValues.

    // Use map to create a new array with sorted values and original -1 positions
    const resultArray = a.map(val => (val === -1 ? -1 : sortedNonNegativeValues.shift()))

    return resultArray
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))

console.log("**************************************")
// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.
function countVowels(input) {
    // Convert the input string to lowercase to make the comparison case-insensitive
    const lowercasedInput = input.toLowerCase()

    // Define the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']

    // Use reduce to count the occurrences of vowels in the string
    const vowelCount = lowercasedInput.split('').reduce((count, char) => {
        if (vowels.includes(char)) {
            return count + 1
        }
        return count
    }, 0);

    return vowelCount
}

// Example usage:
const input1 = 'Hello, World!'
console.log(countVowels(input1)) // Output: 3

const input2 = 'Counting Vowels'
console.log(countVowels(input2)) // Output: 5






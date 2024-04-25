//SORT METHOD: Sort an array from smallest number to largest
// const numArray = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// numArray.sort(function(num1, num2){
//     return num1 - num2
// })
// console.log(numArray)
//---------------SORT WITH FOR LOOP-----------------------
// const numArray = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

// for (let i = 0; i < numArray.length; i++) {
//     for (let j = 0; j < numArray.length - 1; j++) {
//         if (numArray[j] > numArray[j + 1]) {
//             // Swap elements if they are in the wrong order
//             const temp = numArray[j];
//             numArray[j] = numArray[j + 1];
//             numArray[j + 1] = temp;
//         }
//     }
// }

// console.log(numArray);


//?? In this implementation:

//?? - We use a nested loop structure to compare adjacent elements and swap them if they are in the wrong order.
//?? - The outer loop iterates through the array to ensure all elements are sorted.
//?? - The inner loop compares adjacent elements and swaps them if necessary to move the larger elements towards the end of the array.
//?? - This process is repeated until the entire array is sorted in ascending order.
//?? - Finally, the sorted **`numArray`** is logged to the console.
//---------------SORT WITH FOR LOOP-----------------------



//MAP METHOD: Capitalize the first letter of each name and make the rest of the characters lowercase
// const people = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const upperCaseFirst = people.map(function(name){ 
//     return name[0].toUpperCase() + name.slice(1).toLowerCase()

// })
// console.log(upperCaseFirst)

//---------------MAP WITH FOR LOOP-----------------------
// const people = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// const upperCaseFirst = [];

// for (let i = 0; i < people.length; i++) {
//     const name = people[i];
//     const capitalized = name[0].toUpperCase() + name.slice(1).toLowerCase();
//     upperCaseFirst.push(capitalized);
// }

// console.log(upperCaseFirst);

//?? In this implementation:

//?? - We iterate through each element of the **`people`** array using a for loop.
//?? - For each name, we capitalize the first letter (**`name[0].toUpperCase()`**) and convert the rest to lowercase (**`name.slice(1).toLowerCase()`**).
//?? - The modified name is then pushed into the **`upperCaseFirst`** array.
//?? - Finally, we log the **`upperCaseFirst`** array to the console, which contains the modified names.
//---------------MAP WITH FOR LOOP-----------------------



// FILTER METHOD: Given an array of strings, return a new array that only includes words that are 5 characters or
//fewer in length

// const stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const fiveLettersOrLess = stringArray.filter(function(word){
//     if(word.length <= 5)
//     return true
// })
// console.log(fiveLettersOrLess)

// In this implementation:

// - We iterate through each element of the **`people`** array using a for loop.
// - For each name, we capitalize the first letter (**`name[0].toUpperCase()`**) and convert the rest to lowercase (**`name.slice(1).toLowerCase()`**).
// - The modified name is then pushed into the **`upperCaseFirst`** array.
// - Finally, we log the **`upperCaseFirst`** array to the console, which contains the modified names.

//---------------FILTER WITH FOR LOOP-----------------------
// const stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"];

// const fiveLettersOrLess = [];
// for (let i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length <= 5) {
//         fiveLettersOrLess.push(stringArray[i]);
//     }
// }

// console.log(fiveLettersOrLess);

//?? In this implementation:

//?? - We iterate through each element of the **`stringArray`** using a for loop.
//?? - For each element, we check its length and if it's less than or equal to 5, we push it into the **`fiveLettersOrLess`** array.
//?? - Finally, we log the **`fiveLettersOrLess`** array to the console, which contains the filtered words.
//---------------FILTER WITH FOR LOOP-----------------------



// REDUCE METHOD: Turn an array of voter objects into a count of how many people voted

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//  ]
//  //3.
//   const voteCount = voters.reduce(function(final, voter){
//      if(voter.voted){
//         final++
//      }
//      return final
//  }, 0)
//  console.log(voteCount)



//---------------REDUCE WITH FOR LOOP-----------------------
const count = voters.reduce((final, voter) => {
    if (voter.age < 35 && voter.voted) {
        return final++;
    } else {
        return acc;
    }
}, 0);

// let voteCount = 0;

// for (let i = 0; i < voters.length; i++) {
//     if (voters[i].voted) {
//         voteCount++;
//     }
// }
// const count = voters.reduce((final, voter) => {
//     if (voter.age < 35 && voter.voted) {
//         return final++;
//     } else {
//         return final;
//     }
// }, []);
// console.log(voteCount);

//?? In this implementation:

//?? - We initialize **`voteCount`** to **`0`** to serve as the accumulator.
//?? - We iterate through each element of the **`voters`** array using a for loop.
//?? - For each **`voter`** object, we check if they have voted (**`voters[i].voted`**). If they have, we increment **`voteCount`**.
//?? - Finally, we log the accumulated value (total count of voters who voted) to the console.

//---------------REDUCE WITH FOR LOOP-----------------------

//---------------    ACTIVITY    -----------------------

//EXERCISE 1
// const numbers = [3, 6, 8, 11, 5, 9];
// // // Filter out even numbers: [3, 11, 5, 9]
// // // Double each remaining number: [6, 22, 10, 18]

// const result = numbers.filter(num => num % 2 !== 0) 
//                      .map(num => num * 2);

// console.log(result);

//EXERCISE 2
const words = ["apple", "banana", "orange", "kiwi", "grape"];
// // Filter out strings with more than 5 characters
const filteredWords = words.filter(word => word.length <= 5);

// Calculate the total length of remaining strings
const totalLength = filteredWords.reduce((acc, word) => acc + word.length, 0);

console.log(filteredWords); // Output: ["apple", "banana", "orange"]
console.log(totalLength);   // Output: 19

//EXERCISE 3
// const products = [
//     { name: "apple", price: 1.5, quantity: 2 },
//     { name: "banana", price: 0.75, quantity: 3 },
//     { name: "orange", price: 1.0, quantity: 1 }
//     ];
//     // Calculate the total cost: (1.5 * 2) + (0.75 * 3) + (1.0 * 1) = 5.75
const products = [
    { name: "apple", price: 1.5, quantity: 2 },
    { name: "banana", price: 0.75, quantity: 3 },
    { name: "orange", price: 1.0, quantity: 1 }
];

// // Calculate the total cost
const totalCost = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

console.log(totalCost); // Output: 5.75

//EXERCISE 4
    // const numbers = [5, 2, 8, 1, 9];
    // // Sort in descending order: [9, 8, 5, 2, 1]
    // // Square each number: [81, 64, 25, 4, 1]
    // const numbers = [5, 2, 8, 1, 9];

    // // Sort in descending order
    // numbers.sort((a, b) => b - a);
    
    // // Square each number
    // const squaredNumbers = numbers.map(num => num * num);
    
    // console.log(numbers);       // Output: [9, 8, 5, 2, 1]
    // console.log(squaredNumbers);// Output: [81, 64, 25, 4, 1]
//EXERCISE 5
    // const words = ["apple", "banana", "orange", "kiwi", "avocado"];
    // // Sort alphabetically: ["apple", "avocado", "banana", "kiwi", "orange"]
    // // Filter out strings starting with 'a': ["banana", "kiwi", "orange"]
//     const words = ["apple", "banana", "orange", "kiwi", "avocado"];

// // Sort alphabetically
// words.sort();

// Filter out strings starting with 'a'
// const filteredWords = words.filter(word => !word.startsWith('a'));

// console.log(words);         // Output: ["apple", "avocado", "banana", "kiwi", "orange"]
// console.log(filteredWords); // Output: ["banana", "kiwi", "orange"]

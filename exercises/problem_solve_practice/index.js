// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// // test data
// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40
let  largest = (numbers) => {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let max = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; 
      }
    }
  
    return max;
  }
  
  console.log(largest([6, 13, 250, 3])); 
  console.log(largest([3, 5, 2, 8, 1])); 
  console.log(largest([-13, 40, 3, 0, 19, 22])); 

  console.log("***************************************************************")
//   Write a function that takes an array of words and a character and returns each word that has that character present.
  let lettersWithStrings = (words, character) => {
    return words.filter(word => word.includes(character));
  }
  
  // Test data
  console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"));
  console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")); 
  console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")); 

  console.log("***************************************************************")
//   Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
let isDivisible = (num1, num2) => {
    return num1 % num2 === 0;
  }
  
  // Test data
  console.log(isDivisible(4, 2)); // => true
  console.log(isDivisible(9, 3)); // => true
  console.log(isDivisible(15, 4)); // => false
  
  
  
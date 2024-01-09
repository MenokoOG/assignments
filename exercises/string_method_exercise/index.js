// string method exercise for v school, menoko og, 1-9-24

//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

function changeLetters(inputStr){
    let upperCaseStr = inputStr.toUpperCase()
    let lowerCaseStr = inputStr.toLowerCase()

    result = `This is upper case: ${upperCaseStr} and this is lower case: ${lowerCaseStr}`

    return result
}

let testString = "This is a test of my function!!"
let funcTest = changeLetters(testString)
console.log(funcTest)

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// trying my hand at arrow functioning: menoko og
let halfTheStrRoundDown = (inputStr) => {
    let halfLeng = Math.floor(inputStr.length / 2)
    return halfLeng
}

let myTestHalf = "hope arrow function works ya!"
console.log(myTestHalf.length)
let halfTest = halfTheStrRoundDown(myTestHalf)
console.log(halfTest)


// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

let getTheFirstHalf = (inputStr) => {
    let halfStr = halfTheStrRoundDown(inputStr)
    let firstHalf = inputStr.slice(0, halfStr)
    return firstHalf
}

let myTestOfHalf = "Menoko OG is my name and I am a developer!"
let testThisBeInput = changeLetters(myTestOfHalf)
let halfResult = getTheFirstHalf(testThisBeInput)
console.log(halfResult)

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

let capitalizeFirstHalf = (inputString) => {
    
    let splitIndex = Math.ceil(inputString.length / 2)
  
    let firstHalf = inputString.slice(0, splitIndex)
    let secondHalf = inputString.slice(splitIndex)

    let resultString = firstHalf.toUpperCase() + secondHalf.toLowerCase()
  
    return resultString
  };
  
  
  let myInputString = "coding javascript rocks!"
  let upLowResult = capitalizeFirstHalf(myInputString)
  console.log(upLowResult)
  
  

//Write a function that takes a string as a parameter and capitalizes any character that follows a space.

let capitalizeAfterSpace = (inputString) => {
    let words = inputString.split(' ');
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    });
    return capitalizedWords.join(' ')
  };
  
  
  let spaceCapResult = capitalizeAfterSpace("how we doing today?")
  console.log(spaceCapResult)  
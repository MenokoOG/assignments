// Write a function that accepts a string as input. Write a loop and 
// add each letter of the string to an array. Then return the that new array.
function addLettersToArray(string){
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string[i]);
    }
    return result;
}

// Write a function that accepts a string and a single character as inputs. 
// Write a loop that iterates over the string, and returns the position of the 
// first occurrence of the specified character. If the character is not found, tell that to the user
// by returning "Character not found!".
function positionOfFirstOccurance(string, char){
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return "Character not found!";
}

// Write a function that accepts an array of numbers as a parameter. 
// Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.
function find42(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 42) {
            return "Found 42!";
        }
    }
    return "42 not found!";
}

// Write a function that accepts 10 numbers in an array and then prints out 
// the smallest number out of the ten without using Math.min()
function findTheSmallest(array){
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

module.exports = {
    addLettersToArray,
    positionOfFirstOccurance,
    find42,
    findTheSmallest
}

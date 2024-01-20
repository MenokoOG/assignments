// slope style assignment, menoko og

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {
    return animals;
}


const animalArray = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
console.log(animalArray);

// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    };
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

// Use destructuring to use the property names as variables. Destructure the object in the parameter:
function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`;
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));

//   Use array destructuring to make this code ES6:
function returnFirst(items) {
    const [firstItem] = items;
    return firstItem;
}


const itemsArray = [1, 2, 3, 4, 5];
console.log(returnFirst(itemsArray)); 

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));


function combineAnimals(...arrays) {
    return [...arrays.flat()];
}

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackalope"];
const mysteriousAnimals = ["platypus"];

const combinedAnimals = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
console.log(combinedAnimals);

// more es6 functions

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);

const unshift = (array, ...elements) => [...elements, ...array];

const result = product(2, 3, 4, 5, 6);
console.log(result); 
const originalArray = [1, 2, 3, 4, 5];
const newArray = unshift(originalArray, 6, 7, 8, 9, 10);
console.log(newArray); 


function populatePeople(names) {
    return names.map(function (name) {
        [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        };
    });
}
// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:


const peopleArray = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
console.log(peopleArray);
// Output:
// [
//   { firstName: "Frank", lastName: "Peterson" },
//   { firstName: "Suzy", lastName: "Degual" },
//   { firstName: "Liza", lastName: "Jones" },
// ]




  
  

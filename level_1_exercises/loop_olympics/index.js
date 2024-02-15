// loop olympics, menoko og, 1-8-24, v school

/* Write a for loop that prints to the console the numbers 0 through 9.
Write a for loop that prints to the console 9 through 0.
Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"]*/
var nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let s = "";
for (i = 0; i < 10; i++){
  s += i + " ";
}
console.log(s)

var nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 10; i >= 0; i--){
  console.log(i)
}


const fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i++){
  console.log(fruit[i])
}

/*1. Write a loop that will print out all the names of the people of the people array
2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer". */

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

const namesArray = [];
for (let i = 0; i < peopleArray.length; i++) {
    namesArray.push(peopleArray[i].name)
  }
  console.log(namesArray)

const occupationArray = []
for ( let i = 0; i < peopleArray.length; i++){
  occupationArray.push(peopleArray[i].occupation)
}
console.log(occupationArray)

const namesArray2 = []
const occupationsArray2 = []

for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    namesArray2.push(peopleArray[i].name)
  } else {
    occupationsArray2.push(peopleArray[i].occupation)
  }
}

console.log("Names Array:", namesArray2)
console.log("Occupations Array:", occupationsArray2)
  
  // example output: ["Harrison Ford", "Vladimir Putin"] // names
  // example output: ["Singer", "Entertainer"] // occupations

  /* Create an array that mimics a grid like the following using nested for loops:
[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]*/
const numRows = 3
const numCols = 3
const grid = []

// Initialize the grid with zeros
for (let i = 0; i < numRows; i++) {
  const row = []
  for (let j = 0; j < numCols; j++) {
    row.push(0)
  }
  grid.push(row)
}

console.log(grid)


/*
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]] */

const numRows1 = 3
const numCols1 = 3
const grid1 = []

// Initialize the grid with the specified pattern
for (let i = 0; i < numRows1; i++) {
  const row = []
  for (let j = 0; j < numCols1; j++) {
    row.push(i)
  }
  grid1.push(row)
}

console.log(grid1)

/*
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]] */

const numRows2 = 3
const numCols2 = 3
const grid2 = []

// Initialize the grid with the specified pattern
for (let i = 0; i < numRows2; i++) {
  const row = []
  for (let j = 0; j < numCols2; j++) {
    row.push(j)
  }
  grid2.push(row)
}

console.log(grid2)

/* 
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...]*/
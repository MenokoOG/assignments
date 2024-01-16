//arry map exercis, menoko og 1-15-24
// Make an array of numbers that are doubles of the first array

const numbers = [2, 4, 6, 8 ,10]

const doubleNumbers = numbers.map(num => num *2)

console.log(doubleNumbers)

//Take an array of numbers and make them strings
const numToString = numbers.map(num => String(num))
console.log(numToString)

// Capitalize the first letter of each name and make the rest of the characters lowercase

const theNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capitalizeNames = theNames.map(name =>{
    const lowerCase = name.toLocaleLowerCase()
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
})

console.log(capitalizeNames)

//Make an array of strings of the names
 const namesAndAge = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]

const namesOnly = namesAndAge.map(person => person.name)

console.log(namesOnly)

//Make an array of strings of the names saying whether or not they can go to The Matrix
const movieAccess = namesAndAge.map(person => {
    if (person.age >= 18) {
      return `${person.name} can go to The Matrix movie.`;
    } else {
      return `${person.name} cannot go to The Matrix movie because they are under 18.`;
    }
  })

  console.log(movieAccess)

// Make an array of the names in h1s, and the ages in h2s
  const headerFromat = namesAndAge.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`)

  console.log(headerFromat)


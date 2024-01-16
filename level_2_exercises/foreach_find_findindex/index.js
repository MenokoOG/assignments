// lesson, menoko og, 1-16-24
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

// .forEach  NEVER assign a varaible to a forEach call it is only for interation purposes
const newArr = []
// arr.forEach(function(num){
//     // console.log(num)
//     if(num % 2 === 0){
//         newArr.push(num)
//     }
// })

arr.forEach(num => num % 2 === 0 && newArr.push(num))
console.log(newArr)


// .find()-finds exactly what your looking for.
const findJ = users.find(user => user.name === "j")
console.log(findJ) // returns undefined
const findJoe = users.find(user => user.name === "joe")
console.log(findJoe)
const findJulie = users.find(user => user.name === "julie")
console.log(findJulie)

// .findIndex()- returns index position of item in array

const findRickIndex = users.findIndex(user => user.name === "rick") 
console.log(findRickIndex)
const findJoeIndex = users.findIndex(user => user.name === "joe") 
console.log(findJoeIndex)
const findJulieIndex = users.findIndex(user => user.name === "julie") 
console.log(findJulieIndex)

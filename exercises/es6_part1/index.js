// Lesson for V School, Lawrence "Menoko OG" Jefferson II, Date: 1-9-24

// ES6 Part 1


// const and let

const firstName = "Menoko OG"

let age = 1007

// var messes with global and local scope issues. 
// Global, Local, Bracket 
function someFunc(){
    let a
    if(2 === 2){
        a = "hello"
    }
    console.log(a)
 }
 someFunc()

// spread and rest (gather and returns array)
// this is like *args and *kwargs in python

// syntax is ...
function maxNumber(...nums){
    console.log(nums)
}
maxNumber(1,2,3,4,5,6,7,8,9,8,7,6,4, 43)

// spread -objects and arrays
const test1= ["test", "this"]
const test2 = ["spread", "method"]

const allTest = [...test1, ...test2]
console.log(allTest)
console.log(...test1, ...test2)

const person = {
    name: "roxanne",
    whatToDo: "don't turn on the red light!"
}
const foePerson = {...person}   // this is good for making sure new object and pointers not going same object in memory.
console.log(foePerson)

// template literals
let testStr1 = "This is a string but using"
let testStr2 = "template literal!!!"
const testJoin = `${testStr1} ${testStr2}`
console.log(testJoin)
// like f strings in python

// import & export  // very much like python import and export

// node still uses require() and module.exports


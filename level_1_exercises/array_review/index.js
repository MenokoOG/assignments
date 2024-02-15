// array lesson 1-8-24 menoko OG

var numbers = [42, 13, 34, 18, 123]
var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"]
var users = [
    {
        name: "Joe Schmoe",
        age: 42,
        gender: "Male"
    },
    {
        name: "Jill Schmoe",
        age: 41,
        gender: "Female"
    },
    {
        name: "Jimmy Schmoe",
        age: 9,
        gender: "Male"
    }   
]

var disparateArr = ["Alice", 40, true, [8, 10, 12]]
/**
 * QUIZ:
 * 
 * 1. What is the purpose of arrays? Why do programmers care about them?
 * collection of items, ususally same data type
 * 
 * 2. What are some differences between arrays and objects?
 * Arrays are for gathering together many "things", and objects are best used to describe ONE thing in a lot more detail
 * 
 * 3. How would you access the number 34 from the `numbers` array above? 
 * See if you can log it to the console)
 * console.log(numbers[2])
 * 
 * 4. What is the length of the `turtles` array? How would you access that length?
 * 4, and turtle.length
 * 
 * 5. Is it syntatically correct to have an array like `disparateArr`?
 * it is
 * 
 * 6. What might be a better data structure to use for `disparateArr`?
 * object
 * 
 * 7. How would you log Jill Schmoe's name to the console using the `users` array?
 */ console.log(users[1].name)




// var myArray = ["I", "Like", "Turtles"];
// console.log(myArray.length)  // 3
// let last = myArray[myArray.length -1] 
// console.log(last)
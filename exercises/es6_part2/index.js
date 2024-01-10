// Lesson for V School, Lawrence "Menoko OG" Jefferson II, Date:1-9-24

// ES6 part 2

// fat arrow functions

function sum(){ // function declaration

}

const sum2 = function(){  // function expression becasue saved in variable

}

const sum2ES6 = word => {  // one arguement no parathesis, now if no arguements need empty parathesis
    console.log(`a lot like python ${word}!`)
}
let thisWord = "lambdas"
console.log(sum2ES6(thisWord))

const sum3 = (num1, num2) => num1 + num2 // two params so need parathesis, if one line of code though no brackets, if more code then brackets. //this exapmle has immediate return or implicit return, no logc or conditionals etc....
console.log(sum3(5,5))

// addEventListener("click", () => {})

// object literals- like set to dictionary conversion in python
const blue = "blue"
const green = "green"
const red = "red"

const colors = {blue, green, red}

console.log(colors)


// object destructuring
const user = {
    userName: "pichachoo",
    age: 1023,
    _id: "hfjs8snajahd7"
}

// old way is dot notation
const {_id, userName, age} = user // basically it will pull the infomration from the user object to fill the arguements passed in and return the values
console.log(userName)
console.log(_id)

const names = ["tee", "rex", "dino"]
// old way
names[0]
names[1]
names[3]

const [item1, item2, item3] = names
console.log(item2)



// default parameters

let sum4 = (a = 5, b = 10) => {
    return a + b
}

console.log(sum4())
console.log(sum4(9))
console.log(sum4(2,8))

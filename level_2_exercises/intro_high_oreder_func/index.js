// high order functions lesson, menoko og, 1-15-24

// callback is a function passed into another function

let doMath = (num1, num2, callback) => {
    return callback(num1, num2)
}

let sum = (num1, num2) => {
    return num1 + num2
}

let subtarct = (num1, num2) => {
    return num1 - num2
}

let multi = (num1, num2) => {
    return num1 * num2
}

console.log(doMath(10, 5, sum))
console.log(doMath(10, 5, subtarct))
console.log(doMath(5, 5, multi))

// my practice

let testHigh = (callback) => {
    return callback()
}

let myHello = () => {
    return `Hello, I am a passed in function`
}

let anotherFunc = () => {
    return `My name is great developer!!! ${myHello()}`
}
console.log(testHigh(myHello))
console.log(testHigh(anotherFunc))

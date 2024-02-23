//  module pattern  lesson, menoko og, 2-23-24

 const {sum, subtract} = require("./math.js")
 //  const sum = require("./math.js").sum
//  const subtract = require("./math.js").subtract

 const {multiply, setFactor} = require("./math2.js")

 const User = require("./user.js")


 const result = sum(10, 15)

 console.log(result)

console.log(subtract(20, 10))
console.log(sum(50, 50))
console.log(multiply(30))

setFactor(4)
console.log(multiply(30))
console.log(User)
console.log(new User("Big Daddy", 1003))

// map() lesson menoko og, 1-15-24


const arr = [1,2,3,4,5,6,7,8,9]


// const result =arr.map(function(num){
//     return num 
// })

// ES6 version
const result = arr.map(num => num)
const newResult = arr.map(num => num + 5)


console.log(result)
console.log(newResult)

const users = [
    {name: "wizard"},
    {name: "archer"},
    {name: "warrior"}
]

const userResult = users.map(function(user){
    return user.name
})

console.log(userResult)

users.push({name: "Jester"})

const userResult2 = users.map(user => user.name)

console.log(userResult2)
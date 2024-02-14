// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num >= 5)
}
fiveCharactersOrFewerOnly([3, 6, 8, 2])

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}
evensOnly([3, 6, 8, 2])

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5)
}
fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(person => person.member)
}
peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])

//Filter out all the people who are not old enough to see The Matrix (younger than 18)
function ofAge(arr){
    return arr.filter(person => person.age >= 18)
}
ofAge([
    {
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
])
module.exports = {
    fiveAndGreaterOnly,
    evensOnly,
    fiveCharactersOrFewerOnly,
    peopleWhoBelongToTheIlluminati,
    ofAge
}
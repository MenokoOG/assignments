// multiple array methods part 1, menoko og, 1-16-24


let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sortedOfAge = () => {
    const filteredPeople = peopleArray.filter(person => person.age > 18).sort((a, b) => a.lastName.localeCompare(b.lastName)).map(person => `<li>${person.firstName} ${person.lastName}, ${person.age}</li>`)

    return filteredPeople
}

console.log(sortedOfAge())
console.log("************************************************")
peopleArray.push({
    firstName: "Menoko",
    lastName: "OG",
    age: 1023
})

console.log(peopleArray)
console.log("************************************************")
const filteredNames = peopleArray.filter(person => !person.lastName.endsWith("y") && !person.lastName.endsWith("a"))

console.log(filteredNames)
console.log("************************************************")

peopleArray.splice(1, 1)

console.log(peopleArray)
console.log("************************************************")
const reverseArrray = peopleArray.reverse()
console.log(reverseArrray)


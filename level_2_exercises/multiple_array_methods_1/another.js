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
];

// Function to filter and sort people older than 18 alphabetically by last name
const filterAndSortPeople = () => {
    const filteredPeople = peopleArray
        .filter(person => person.age > 18)
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map(person => `<li>${person.firstName} ${person.lastName}, ${person.age}</li>`);

    return filteredPeople;
};

// Add another individual to the original array
peopleArray.push({
    firstName: "New",
    lastName: "Person",
    age: 25
});

// Filter people whose last names end with "y" or "a"
const filteredNames = peopleArray.filter(person => !person.lastName.endsWith('y') && !person.lastName.endsWith('a'));

// Remove the second individual from the array
peopleArray.splice(1, 1);

// Return the array in reverse order
const reversedArray = peopleArray.reverse();

// Output the results
console.log("People older than 18, sorted alphabetically by last name:");
console.log(filterAndSortPeople());

console.log("\nPeople with last names not ending in 'y' or 'a':");
console.log(filteredNames);

console.log("\nArray after removing the second individual and reversing:");
console.log(reversedArray);

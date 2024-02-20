function sortByMultipleCriteria(people) {
    // Sorting by age in ascending order
    people.sort((a, b) => {
        if (a.age !== b.age) {
            return a.age - b.age;
        } else {
            // If ages are the same, sort by name in alphabetical order
            return a.name.localeCompare(b.name);
        }
    });
    return people;
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

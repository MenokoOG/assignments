var peopleArray = [
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




function sortedOfAge(arr) {
     // Filter people older than 18
     const filteredPeople = arr.filter(person => person.age > 18);

     // Sort by last name
     filteredPeople.sort((a, b) => a.lastName.localeCompare(b.lastName));
 
     // Map each person to a string containing HTML <li> element
     const resultList = filteredPeople.map(person => `<li>${person.firstName} ${person.lastName} - Age: ${person.age}</li>`);
 
     // Join the list items into a single string
     const resultString = resultList.join('');
 
     return resultString;
 }

module.exports = {
    sortedOfAge
}

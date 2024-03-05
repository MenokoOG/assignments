// mid level 5 code challenges, menoko og, 2-29-24
const words = ["apple", "banana", "cherry"];

function extractUniqueCharacters(strings) {
  // Create an object to store unique characters
  const uniqueChars = {};

  // Iterate through each string in the array
  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];

    // Iterate through each character in the string
    for (let j = 0; j < str.length; j++) {
      const char = str[j];

      // Add character to uniqueChars object if it's not already there
      if (!uniqueChars[char]) {
        uniqueChars[char] = true;
      }
    }
  }

  // Return array of keys (unique characters)
  return Object.keys(uniqueChars);
}

const uniqueChars = extractUniqueCharacters(words);
console.log(`The unique characters are: ${uniqueChars}`); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
console.log("****************************************************************");
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];

function sortByProperty(objects, propertyName) {
  return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]);
}

const sortedByAge = sortByProperty(people, "age");
console.log("Sorted by age youngest to oldest:");
console.log(sortedByAge);

// Write a function called extractInitials that takes an array of full names and returns a new array containing only the initials of each name.
function extractInitials(names) {
    // Use the map method to iterate over each full name in the names array
    return names.map(name => {
        // Split each full name into individual words using a space (' ') as the separator
      const nameParts = name.split(' ');
      // Use the map method to iterate over each name part and extract the first character of each
        // Then, join these characters together to form the initials
      const initials = nameParts.map(part => part[0]).join('');
       // Return the initials for the current full name
      return initials;
    });
  }
  


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']


console.log("**********************************************************")


// Write a function called filterByProperty that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.
function filterByProperty(objects, propertyName, propertyValue) {
    // Use the filter method to iterate over each object in the array
  // Check if the value of the specified property matches the given propertyValue
  // Return true if the property value matches, indicating that the object should be included in the filtered array
    return objects.filter(obj => obj[propertyName] === propertyValue);
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);
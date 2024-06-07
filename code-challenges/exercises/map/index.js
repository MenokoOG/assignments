///Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(num => num * 2);

}

// Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(num => num.toString());

}

// Capitalize each of an array of names
function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}


// Make an array of strings of the names
function namesOnly(arr){
    return arr.map(person => person.name);
}
// Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} can go to The Matrix`;
        } else {
            return `${person.name} is under age!!`;
        }
    });
}

// Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    return arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);

}
module.exports = {
    doubleNumbers,
    stringItUp,
    capitalizeNames,
    namesOnly,
    makeStrings,
    readyToPutInTheDOM
}
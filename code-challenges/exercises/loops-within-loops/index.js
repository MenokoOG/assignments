function forception(people, alphabet) {
    let resultArray = [];

    for (let i = 0; i < people.length; i++) {
        // Add the person's name followed by a colon
        resultArray.push(people[i] + ":");

        // Add all the uppercase letters of the alphabet
        for (let j = 0; j < alphabet.length; j++) {
            resultArray.push(alphabet[j].toUpperCase());
        }
    }

    return resultArray;
}

// Test case
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(forception(people, alphabet));






module.exports = { forception }
// exercise for v school, monoko OG, 1-8-24
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    let resultArray = []

    for (let i = 0; i < people.length; i++) {
        resultArray.push(people[i] + ":")

        for (let j = 0; j < alphabet.length; j++) {
            resultArray.push(alphabet[j])
        }
    }

    return resultArray
}



let result = forception(people, alphabet)
console.log(result)

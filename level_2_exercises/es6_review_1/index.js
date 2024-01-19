// es6 review part 1, menoko og, 1-19-24
// Why is ageRange not defined?
// How can we fix this function with var? 
// How can we fix this function avoiding the use of var?
// Why would you use const vs let?
// here let scopes to nearest curly brackets, const woul dnot be able to be changed.
function getAgeRange(person){
    let ageRange
    if(person.age < 18){
         ageRange = "Child"
    } else if(person.age >= 18 && person.age < 80){
         ageRange = "Adult"
    } else {
         ageRange = "Elderly Person"
    }

    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter?
function getAgeRange({age}){
    let ageRange
    if(age < 18){
        ageRange = "Child"
    } else if(age >= 18 && age < 80){
        ageRange = "Adult"
    } else {
        ageRange = "Elderly Person"
    }

    return ageRange
}
const person = { name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person?
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors

//or lines that clutter the console
console.log("The " + person.ageRange + ", " + person.name + ", is " + person.age + " years old.")
// change the above concatented string into a template literal
console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`)

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
const fringeMonths1 = springMonths.concat(fallMonths)

const fringeMonths = [...springMonths, ...fallMonths] //spread method

console.log(springMonths, fallMonths, fringeMonths1)
console.log(fringeMonths)
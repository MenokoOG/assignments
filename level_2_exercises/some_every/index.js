// some every lesson menoko og, 1-16-24
const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]
const names2 = ["Jack", "John", "Jill", "Joseph", "Jackie"]

// .some()

const doesStartWithS = names.some(name => name[0] === "S")
console.log(doesStartWithS)


// .every()
const doesStartWithJ = names.every(name => name[0] === "J")
console.log(doesStartWithJ) //false becasue steve is in array

const doesStartWithJ2 = names2.every(name => name[0] === "J")
console.log(doesStartWithJ2) // removed steve so now true

const numbersArr = [109, 234, 678, 345, 321, 6789, 34567, 789, 321]
const numbersArr2 = [345, 321, 34567, 321]
// have to convert numbers ot string for the method to work.
const doesStartWith3 = numbersArr.every(num => num.toString().startsWith("3"))
const doesStartWith3Two = numbersArr2.every(num => num.toString().startsWith("3"))
console.log(doesStartWith3)
console.log(doesStartWith3Two)
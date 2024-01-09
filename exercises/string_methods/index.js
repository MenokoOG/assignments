// JS String Methods

// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp


// toUpperCase & toLowerCase

let greet = "hello there awesome developer!"
let upperGreet = greet.toUpperCase()
console.log(upperGreet)

let lowerGreet = greet.toLowerCase()
console.log(lowerGreet)

// concant
let fName = "Menoko"
let lName = " OG"

let wholeName = fName.concat(lName)
console.log(wholeName)
// split
let myGun = "bazooka"
let letterArr = myGun.split("")
let myGunSplit = myGun.split("z")
let myGunFunny = myGun.split("o")
console.log(letterArr)
console.log(myGunSplit)
console.log(myGunFunny)

// slice- cuts up a string
let phoneNumer = "8675309"
let phoneNumerSlice1 = phoneNumer.slice(0, 3)
let phoneNumerSlice2 = phoneNumer.slice(3, 7)
let newNumer = phoneNumerSlice1.concat("-" + phoneNumerSlice2)
let newNumer2 = phoneNumerSlice1.concat(`-${phoneNumerSlice2}`)
console.log(newNumer)
console.log(newNumer2)

// indexOf
let myFubArr = "This is so fun."
let whereIsTheF = myFubArr.indexOf("f")
let isThereAExcla = myFubArr.indexOf("!")
console.log(whereIsTheF)
console.log(isThereAExcla) // not in string so returns -1 value
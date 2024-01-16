// sort array exercise menoko og 1-16-24
// Sort an array from smallest number to largest
const numbersArr = [1, 3, 5, 2, 90, 20]

const leastToGreatest = numbersArr.sort((a, b) => a -b)
console.log(leastToGreatest)

// Sort an array from largest number to smallest
const greatestToLeast = numbersArr.sort((a, b) => b -a)
console.log(greatestToLeast)

//Sort an array from shortest string to longest
const strArray = ["dog", "wolf", "by", "family", "eaten"]

const lengthSort = strArray.sort((a, b) => a.length - b.length)
console.log(lengthSort)

// Sort an array alphabetically
const alphabetical = strArray.sort()
console.log(alphabetical)


//Sort the objects in the array by age
const peoples = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

const byAge = peoples.sort((a, b) => a.age - b.age)
console.log(byAge)


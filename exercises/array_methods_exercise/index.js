//menoko og, 1-8-24 v school exercise

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()
console.log("Vegetables after removing the last item:", vegetables)


fruit.shift()
console.log("Fruit after removing the first item:", fruit)


let orangeIndex = fruit.indexOf("orange")
console.log("Index of 'orange' in fruit array:", orangeIndex)


fruit.push(orangeIndex)
console.log("Fruit array after adding the index of 'orange':", fruit)


let vegLength = vegetables.length
console.log("Length of the vegetable array:", vegLength)


vegetables.push(vegLength)
console.log("Vegetables array after adding its length:", vegetables)


let food = fruit.concat(vegetables)
console.log("Combined 'food' array:", food)


food.splice(4, 2)
console.log("Food array after removing elements at index 4:", food)


food.reverse()
console.log("Reversed 'food' array:", food)


let foodString = food.join(", ")
console.log("Food array as a string:", foodString)




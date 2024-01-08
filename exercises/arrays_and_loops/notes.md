Usage
Often times we will want to "loop over" or "iterate over" and array. This means we go and dig into each of the items in our array and either check it for something or do something with each item.
Examples
Meal Helper App
A user selects 5 ingredients in a list of ingredients and clicks a button to give those ingredients an "added" status.
You would loop through an array of checkedIngredients and add a isAdded property to each.
Trading Card App
You receive data for 100 trading cards from a data base, but you only want to display the ones where the card was made before 1980.
You would loop through the array of cards from the data base, and check what year each one was made, and only display the ones where the cards year < 1980
Grocery Store Inventory App
A grocery store has an array of all their fruit. They would like to count how many bananas they have.
They would loop through all of their fruit and add one to a variable for every fruit that was a banana.
The code
Let us print every animal from an array of animals.
var animals = ["dog", "cat", "octopus", "blowfish", "lion"]

for (var i = 0; i < animals.length; i++){
  console.log(animals[i])
}

​
Two big things that we need to pay attention to.
#1 .length
Every array has a property called .length. This will tell us how many items are in the array. Since we may not know how many items are going to be in an array, we can not say:
for (var i = 0; i < 5; i++){
  console.log(animals[i])
}

​
We can't use 5, or 10, or 1000000. But how many times our loop runs needs to be dynamic. So we use arrayName.length.
#2 arrayName[i]
the variable i starts at 0. We tell it to do that when we say var i = 0. In our first time through the loop in our animals example, i will equal 0, so if we say: animals[i], that's like saying: animals[0]. What is animals[0] referring to?
What will i be the next or second time through the loop?
That's right, 1. And what will animals[i] be? What about the next time through? And the next?
This is how we will "loop through" or "iterate through" a loop.
Practice
Loop through the following array, and log to the console "hooray" for every party there is.
var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

​
Loop through the following array, and count how many "trues" there are.
var booleans = [true, true, false, true, false, false, false]

​
Add an isAdmin property to each of the users in this array.
var users = [
  {
    name: "Sophie",
    age: 12
  },
  {
    name: "Larry",
    age: 32
  },
  {
    name: "Cathy",
    age: 40
  }
]
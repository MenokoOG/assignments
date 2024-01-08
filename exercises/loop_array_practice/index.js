

// Loop through the following array and count how many "`computer`s" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

let computerCount = 0

for (let i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    computerCount++
  }
}

console.log("Number of computers: " + computerCount)

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

// Loop through the array
for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  let person = peopleWhoWantToSeeMadMaxFuryRoad[i]

  // Check if the person is 18 or older
  if (person.age >= 18) {
    // Log personalized message for being old enough
    console.log(`${person.name} is old enough to see Mad Max Fury Road.`)
    // Check gender for an even more personalized message
    console.log(`\t${person.name} is old enough. ${person.gender === "male" ? "HE'S" : "SHE'S"} good to see Mad Max Fury Road.`)
  } else {
    // Log personalized message for not being old enough
    console.log(`${person.name} is not old enough to see Mad Max Fury Road. Don't let ${person.gender === "male" ? "HIM" : "HER"} in.`)
  }
}
/**### **Optional bonus challenges for this problem**

**#1**

Log to the console a personalized message like:

`Mike is not old enough to see Mad Max`

or

`Madeline is old enough to see Mad Max.`**#2**

Check to see if the movie goer is a male or female for an even more personalized message.

`Mike is not old enough to see Mad Max Fury Road, don't let HIM in.`

or

`Madeline is old enough. SHE'S good to see Mad Max Fury Road.` */



/**Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array `[2, 3, 2]` would toggle the button 7 times.

The light is off to start with. Log to the console whether or not the light is on at the end. */

function toggleLight(num) {

  console.log(`Light is ${num % 2 === 0 ? 'off' : 'on'}`);
}

function toggleLightArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      toggleLight(j + 1)
    }
  }
}

// arrays
const array1 = [2, 5, 435, 4, 3]
const array2 = [1, 1, 1, 1, 3]
const array3 = [9, 3, 4, 2]

// Toggle lights for each array
toggleLightArray(array1)
toggleLightArray(array2)
toggleLightArray(array3)


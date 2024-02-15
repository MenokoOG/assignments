// Review - Arrays and Loops

// var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]
// var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]
// var users = [
//     {
//         name: "joe",
//         age: 30,
//     },
//     {
//         name: "steve",
//         age: 23
//     },
//     {
//         name: "sarah",
//         age: 39
//     },
//     {
//         name: "lisa",
//         age: 27
//     }
// ]

// for(let i = 0; i < petsArr.length; i++){
//     console.log(petsArr[i] + "s")
// }

// for(let i = 0; i < numbersArr.length; i++){
//     if(numbersArr[i] % 2 !== 0)[
//         console.log(numbersArr[i])
//     ]
// }

// for(let i = 0; i < users.length; i++){
//     console.log("Hi, I am " + users[i].name + " and I am " + users[i].age + " years odl!")
//     console.log(`Hi, I am ${users[i].name} and I am ${users[i].age} years old!`)
// }

// for(let i = petsArr.length -1; i >= 0; i--){
//     console.log(petsArr[i])
// }

/* QUIZ
    1. What part of the for loop will allow you to access each individual item in an array?
    
    2. What part of the for loop will need the array's length in order to run the correct amount of iterations?
    
    3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )
    
    
    4. Using the numbers array, how would you write a for loop to console log only the odd numbers?
    
    5. Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")
    
    6. Using the pets array, how would you write a for loop that would console.log all the pets in
    reverse order?
    
*/
// Loop through the following array, and log to the console "hooray" for every party there is.
var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for(let i = 0; i < eventsAtWork.length; i++){
    if(eventsAtWork[i] === "party"){
        console.log(eventsAtWork[i] + " hooray")
    }
}

// Loop through the following array, and count how many "trues" there are.
var booleans = [true, true, false, true, false, false, false]

for(let i = 0; i < booleans.length; i++){
    if(booleans[i] === true){
        console.log(booleans[i])
    }
}

//Add an isAdmin property to each of the users in this array.
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

  for(let i = 0; i < users.length; i++){
    console.log(`${users[i].name} isAdmin`)
  }
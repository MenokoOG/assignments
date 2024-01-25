
const people = [ "John", "Adam", "Amber" ]
// Given the following code below, write a function that uses  .map()  to wrap each string/name in the array in an <h1> opening and closing tag
const peopleElements = people.map(function(person){
    return (`<h1> ${person} </h1>`)
})
    
    


console.log(peopleElements)



// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]






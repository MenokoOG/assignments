// querySelector
// Select a single element from the page.
let result = document.querySelector("ol#favorite-things > li")
console.log(result)

// NOTE: it would be better when targeting single element instead of child step down like example above is to go and give an id and target by getElementByID


// querySelectorAll
// select all elements from the page that match the query.
let result2 = document.querySelectorAll("#favorite-things > li")
console.log(Array.from(result2))

for ( let i = 0; i < result2.length; i++){
    result2[i].textContent = "**Not going to tell you!***"
}
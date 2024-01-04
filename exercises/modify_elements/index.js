// iinerHTML -security risk.
//innerText - expspensive
// use textContent

// let person = {name: "Joker"}
// person.name = "Batman"
// console.log(person)
/*
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */
let changeH1 = document.getElementById("the-h1")
// console.log(changeH1)
let changePara = document.getElementById("the-para")
// console.log(changePara)

changePara.textContent = changeH1.textContent
/*
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */

let head1El = document.getElementById("header1")
let head2El = document.querySelector("#header2")
let olEl = document.querySelectorAll("#ol-el > li")
let navEl = document.querySelectorAll("#navbar > li")
// console.log(Array.from(navEl))

head1El.textContent = "new heading change"
head1El.style.color = "yellow"
head1El.style.backgroundColor = "black"
head1El.style.border = "2px solid red"
head1El.style.textAlign = "center"
head1El.style.padding = "20px 20px"

head2El.textContent = "Hello World!!!!!!"
head2El.style.color = "green"
head2El.style.border = "1px dashed purple"
head2El.style.backgroundColor = "pink"
head2El.style.display = "flex"
head2El.style.justifyContent = "center"
head2El.style.padding = " 10px 30px "


for ( let i = 0; i < olEl.length; i++){
    olEl[i].textContent = "**Hello Menoko OG***"
    olEl[i].style.color = "purple"
    olEl[i].style.fontWeight = "bold"
    olEl[i].style.fontSize = "20px"
}







for ( let i = 0; i < navEl.length; i++){
    navEl[i].textContent = "**Not going to tell you!***"
    navEl[i].style.color = "red"
    navEl[i].style.fontWeight = "bold"
    navEl[i].style.fontSize = "40px"
}

let newPara = document.createElement("p")
newPara.textContent = "This was created in JavaScript"
newPara.style.color = "blue"
newPara.style.fontWeight = "bold"
newPara.style.textAlign = "center"
newPara.style.fontSize = "20px"
document.body.append(newPara)
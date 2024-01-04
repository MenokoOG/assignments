let changeStyle = document.querySelector("#h1-el")
let backChange = document.getElementById("container")
let bodyChange = document.getElementById("body-el")

changeStyle.style.color = "red"
changeStyle.style.border = "1px solid black"

backChange.style.backgroundColor = "blue"

bodyChange.style.backgroundColor = "pink"

// good away to get properties of object 
console.log(Object.keys(changeStyle.style))
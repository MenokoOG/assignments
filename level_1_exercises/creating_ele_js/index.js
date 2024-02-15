let newLi = document.createElement("li")

let myList = document.getElementById("my-list")

myList.append(newLi)
newLi.textContent = "3"
/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */
// let bodyEl = document.getElementsByTagName("body")
let newPara = document.createElement("p")
newPara.textContent = "This was created in JavaScript"
newPara.style.color = "blue"
newPara.style.fontWeight = "bold"
newPara.style.textAlign = "center"
newPara.style.fontSize = "40px"
document.body.append(newPara)




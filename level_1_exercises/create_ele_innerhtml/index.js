// innerHTML vs textContent

let myList = document.getElementById("my-list")
console.log(myList.textContent)
console.log(myList.innerHTML)
myList.innerHTML += "<li>3</li>"

document.body.innerHTML += "<p id='para'>This is new</p>"
document.getElementById("para").style.textAlign = "center"



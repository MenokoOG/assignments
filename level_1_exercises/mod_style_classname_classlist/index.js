//className
// let className = document.querySelector("#header").className
// console.log(className)

//classList- use this best way
// document.querySelector("#header").classList.add("new-class")
// console.log(document.querySelector("#header").className)
// document.querySelector("#header").classList.remove("new-class")
// console.log(document.querySelector("#header").className)
// document.querySelector("#header").classList.add("new-class")
// document.querySelector("#header").classList.toggle("another")
// console.log(document.querySelector("#header").className)
// document.querySelector("#header").classList.toggle("another")
// console.log(document.querySelector("#header").className)
// document.querySelector("#header").classList.remove("new-class")
// console.log(document.querySelector("#header").className)

let BodyEl = document.querySelector("#body-el")
let MainHeadEl = document.querySelector("#header")
let SubHeadOneEl = document.getElementById("sub-header1")
let SubHeadTwoEl = document.getElementById("sub-header2")
let paraOneEl = document.getElementById("para1-el")
let paraTwoEl = document.getElementById("para2-el")
let olEl = document.getElementById("list-el")
let items = document.getElementsByClassName("li-el")

BodyEl.style.backgroundColor = "burlywood"

MainHeadEl.textContent = "This is the main header now with changed text and color through JavaScript."
MainHeadEl.style.color = "red"

SubHeadOneEl.style.textAlign = "center"
SubHeadOneEl.textContent = "This is sub header one moved to center and different text and color."
SubHeadOneEl.style.color = "green"

SubHeadTwoEl.style.border = "1px solid blue"
SubHeadTwoEl.style.textAlign = "center"
SubHeadTwoEl.textContent = "new  header centered and with border and new color"
SubHeadTwoEl.style.color = "brown"
SubHeadTwoEl.style.backgroundColor = "grey"
SubHeadTwoEl.style.padding = "10px 10 px"


paraOneEl.textContent = "This para had new content and look through javascript!!!!!"
paraOneEl.style.fontWeight = "bold"
paraOneEl.style.color = "blue"

paraTwoEl.style.color = "green"
paraTwoEl.style.textAlign = "center"
paraTwoEl.style.borderBottom = "2px dashed red"
paraTwoEl.textContent = "New text here also, Coooooollll!!!!"
paraTwoEl.style.fontWeight = "Medium"
paraTwoEl.style.marginBottom = "10px"
paraTwoEl.style.padding = "5px 5px"
paraTwoEl.style.lineHeight = "40px"

olEl.style.backgroundColor = "green"
items[0].textContent = "Different Item"
items[0].style.color = "yellow"
items[2].textContent = "Another different item."
items[2].style.color = "yellow"

for (let i = 0; i < items.length; i++){
    console.log(items[i].innerText)
}






// Event listener preactice for V School exercise, Menoko OG, 1-8-24
let squareEL = document.getElementById("square-el")

function mouseOver() {
    squareEL.style.backgroundColor = "blue"
}
squareEL.onmouseover = mouseOver

function mouseDown(){
    squareEL.style.backgroundColor = "red"
}
squareEL.onmousedown = mouseDown

function mouseLetGo(){
    squareEL.style.backgroundColor = "yellow"
}
squareEL.onmouseup = mouseLetGo

function mouseDouble(){
    squareEL.style.backgroundColor = "green"
}
squareEL.ondblclick = mouseDouble

function mouseScroll(){
    squareEL.style.backgroundColor = "orange"
}

squareEL.onwheel = mouseScroll






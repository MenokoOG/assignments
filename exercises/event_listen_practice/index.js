// Event listener preactice for V School exercise, Menoko OG, 1-8-24
let squareEL = document.getElementById("square-el")

function mouseOver() {
    squareEL.style.backgroundColor = "blue"
}
squareEL.onmouseover = mouseOver

function mouseDown() {
    squareEL.style.backgroundColor = "red"
}
squareEL.onmousedown = mouseDown

function mouseLetGo() {
    squareEL.style.backgroundColor = "yellow"
}
squareEL.onmouseup = mouseLetGo

function mouseDouble() {
    squareEL.style.backgroundColor = "green"
}
squareEL.ondblclick = mouseDouble

function mouseScroll() {
    squareEL.style.backgroundColor = "orange"
}

squareEL.onwheel = mouseScroll

//Function to change the background color based on the pressed key
function changeColor(event) {
    switch (event.key) {
        case 'r':
            squareEL.style.backgroundColor = 'red';
            break;
        case 'y':
            squareEL.style.backgroundColor = 'yellow';
            break;
        case 'o':
            squareEL.style.backgroundColor = 'orange';
            break;
        case 'g':
            squareEL.style.backgroundColor = 'green';
            break;
        default:
            // Do nothing for other keys
            break;
    }
}

// Add an event listener to the document to listen for key presses
document.addEventListener('keydown', changeColor);




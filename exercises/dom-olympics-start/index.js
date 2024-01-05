const newHeadEl = document.getElementById("header")
const newNameEl = document.getElementById("name")
let newLeft1El = document.getElementById("left1-el")
let newLeft2El = document.getElementById("left2-el")
let newRight1El = document.getElementById("right1-el")
let newRight2El = document.getElementById("right2-el")
let clearBtnEl = document.getElementById("clear-button")
let messagesDiv = document.querySelector(".messages")
let themeDropDown = document.getElementById("theme-drop-down")

newHeadEl.textContent = "JavaScript Made This!!"
newHeadEl.style.fontSize = "40px"
newHeadEl.style.textAlign = "center"
newHeadEl.style.fontWeight = "bold"

newNameEl.innerHTML += "<span id='menoko'>Menoko OG</span> made this with JavaScript"
newNameEl.style.textAlign = "center"

let menokoEl = document.getElementById("menoko")
menokoEl.style.marginLeft = "10px"
menokoEl.style.color = "burlywood"

newLeft1El.textContent = "This is so cool!!!!"
newRight1El.textContent = "Yeah. it is!!!!"
newLeft2El.textContent = "What to keeping coding JavaScript?"
newRight2El.textContent = "Heck yeah. let's do this!!!"

clearBtnEl.addEventListener('click', function() {
    // Clear the contents of the div
    messagesDiv.innerHTML = '';
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('theme-drop-down');
    var messagesContainer = document.getElementById('messages-el');

    dropdown.addEventListener('change', function () {
        // Remove existing theme classes
        messagesContainer.classList.remove('theme-one', 'theme-two');

        // Add the selected theme class
        messagesContainer.classList.add(dropdown.value);
    });
});







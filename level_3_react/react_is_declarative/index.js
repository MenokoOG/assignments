// react declarative lesson, menoko og, 1-25-24
// vanilla JS way to create html elements, imperative design
// Create a new h1 element
let newH1 = document.createElement("h1");


newH1.textContent = "This is a great test Menoko !!!!!! done the vanilla way!!!!";

newH1.className = "header";


let rootDiv = document.getElementById("root");


rootDiv.appendChild(newH1);

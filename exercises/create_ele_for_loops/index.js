let powerRangers = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

let rangerEl = document.getElementById("rangers")

for (let i = 0; i < powerRangers.length; i++){
    rangerEl.innerHTML += "<li>" + powerRangers[i].name + " -- Color ranger: " + powerRangers[i].color + "</li>"
}




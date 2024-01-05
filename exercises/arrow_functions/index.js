const h1 = document.getElementById("clickable")
h1.addEventListener("click", e => {
    h1.textContent = "clicked"    
})



const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map(bird => "big " + bird) 


const addTwo = (first, second) => first + second

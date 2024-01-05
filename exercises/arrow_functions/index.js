const h1 = document.getElementById("clickable")
h1.addEventListener("click", function(e){
    h1.textContent = "clicked"    
})



const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map(function(bird){
    return "big " + bird
})


function addTwo(first, second){
    return first + second
}
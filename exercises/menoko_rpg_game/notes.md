example:

let hp = 100

function walk(){
    const willFight = prompt('(f) for fighting, (i) for checking inventory')
    if(willWalk === "f"){
        fight()
    } else if (willWalk === "i"){
        checkInventroy()
    } 
}

function fight(){
    const winner = selectWinner()
}

while(hp > 0){
    walk()
}


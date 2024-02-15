// constructor functions lesson, menoko og, 1-9-24

// build objects and are critical in OOP
// new key word is for instantiate an object


// constructor function

function Tank(name, type , country, gunSound){ // can be delcared as class also 
    this.name = name
    this.type = type
    this.country = country
    this.gunSound = gunSound
}

// doing it with ES6 classes: 
// class Tank{ 
//     constructor(name, type , country, gunSound ){
//         this.name = name
//         this.type = type
//         this.country = country
//         this.gunSound = gunSound
//         this.fire = e => {
//             return this.gunSound
//         }
//     }
       
// }



let superPer = new Tank("T26E4 Super Pershing", "Medium Tank", "USA", "BOOOOOMM!!!!!")
let tiger = new Tank("Panzerkampfwagen Tiger Ausf.B", "Heavy Tank", "Germany", "KABOOOOOM!!!!!")

Tank.prototype.fire = function() {  // prototype is doing something to the constructor, yet doing class is better. 
    console.log(this.gunSound) 
}

console.log(superPer)
console.log(tiger)
console.log(superPer.name )
tiger.fire()
superPer.fire()

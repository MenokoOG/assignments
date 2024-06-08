//classes lesson, menoko og, 1-20-24

// Constructor Functions
// blue print 

// function Car(make, model){
//     this.make = make
//     this.model = model
// }

// Car.prototype.honk = function(){
//     console.log("Honk, Honk!!!")
// }
// // instantiating an object from blue print
// const dodge = new Car("dodge", "viper")
// console.log(dodge.model)
// console.log(dodge.honk())

// ES6 Classes
class Vehicle {
    constructor(make, model, honkSound){
        this.make = make
        this.model = model
        this.honkSound = honkSound
    }
    honk(){
        console.log(this.honkSound)
    }

    drive(){
        console.log("VROOOOM!!!!!")
    }
}

class Motorcyle extends Vehicle {
    constructor(make, model, honkSound, hasSideCar){  
        super(make, model, honkSound)   
        this.hasSideCar = hasSideCar
    }


}

const dodge = new Vehicle("dodge", "viper", "rooooom!!")

const harley = new Motorcyle("Harley", "Davidson", "beep beep", true)

console.log(dodge.model)
console.log(harley.model)
dodge.honk()
harley.honk()
console.log("***********************************")
// my practice

class ServiceMember {
    constructor(fName, Lname, age, branch, rank){
        this.fName = fName
    this.Lname = Lname
    this.age = age
    this.branch = branch
    this.rank =rank
    }

    printNameRank(){
        return ` ${this.rank} ${this.fName} ${this.Lname} `
    }

    printFull(){
        return `Name: ${this.fName} ${this.Lname} Age: ${this.age} Branch: ${this.branch} Rank: ${this.rank}`
    }

    
}

class ArmyPerson extends ServiceMember{
    constructor(fName, Lname, age, branch, rank, fortStation){
        super(fName, Lname, age, branch, rank)
        this.fortStation = fortStation
    }
    armyPrint(){
        return super.printFull() + ` Duty Assignment: ${this.fortStation} `
    }
}

class MarinePerson extends ServiceMember{
    constructor(fName, Lname, age, branch, rank, campStation){
        super(fName, Lname, age, branch, rank)
        this.campStation = campStation
    }

    marinePrint(){
        return super.printFull() + ` Duty Assignment: ${this.campStation} `
    }
}

class NavyPerson extends ServiceMember{
    constructor(fName, Lname, age, branch, rank, shipStation){
        super(fName, Lname, age, branch, rank)
        this.shipStation = shipStation
    }

    navyPrint(){
        return super.printFull() + ` Duty Assignment: ${this.shipStation} `
    }
}

class AirForcePerson extends ServiceMember{
    constructor(fName, Lname, age, branch, rank, baseStation){
        super(fName, Lname, age, branch, rank)
        this.baseStation = baseStation
    }
    airForcePrint(){
        return super.printFull() +` Duty Assignment: ${this.baseStation} `
    }
}

const newArmyGuy = new ArmyPerson("Capt", "America", 201, "Army", "CPT", "Fort Moore")
console.log(newArmyGuy.armyPrint())
const newMarineGuy = new MarinePerson("joe", "slicky", 25, "Marine Corp", "Gunny Sgt", "Camp Lejuene" )
console.log(newMarineGuy.marinePrint())
const newNavySquid = new NavyPerson ("posiden", "trident", 3000, "Navy", "Admiral", "USS Enterprise")
console.log(newNavySquid.navyPrint())
const newAirForceWingNut = new AirForcePerson("Red", "Barron", 150, "Air Force", "ACE!!", "Fairchild AFB")
console.log(newAirForceWingNut.airForcePrint())

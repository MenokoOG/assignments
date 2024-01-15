// web storage lesson ,menoko og 1-15-24

// local storage
//session storage
// JSON - Javascript Object Notation
    // JSON.stringify => turning JS into JSON
    // JSON.parse => Turns JSON into JS

// Setter - Save data in local storage (key = value pairs)
localStorage.setItem("name", "Menoko OG")
localStorage.setItem("age", 1007)
localStorage.setItem("isAlive", true)
localStorage.setItem("powers", JSON.stringify(["deathray", "prismatic wall", "lightning bolt"]))
localStorage.setItem("address", JSON.stringify({street: "123 Ave.", city: "neverneverland"}))

//Getter
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const powers = JSON.parse(localStorage.getItem("powers"))
const address = JSON.parse(localStorage.getItem("address"))

// Remove
// localStorage.removeItem("age")

console.log(name)
console.log(age)
console.log(isAlive)
console.log(powers)
console.log(address)

for (let i = 0; i < powers.length; i++){
    console.log(powers[i])
}
console.log(Object.keys(address))
console.log(Object.values(address))

const addressKeys = Object.keys(address)

addressKeys.forEach((key, index) =>{
    console.log(`${key}: ${address[key]}`)
})
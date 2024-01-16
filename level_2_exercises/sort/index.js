// sort lesson, menoko og 1-16-24
const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// this changes the array, so original object is altered.
arr.sort((a,b) => a - b )

console.log(arr)

arr.sort((a, b) => b - a)
console.log(arr)

const coolWeapons = ["Bazooka", "M-16", "Light Saber", "Blaster", "Ninja Star"]
coolWeapons.sort()
console.log(coolWeapons)
const coolWeapons2 = ["bazooka", "M16", "light Saber", "Blaster", "Ninja Star"]
coolWeapons2.sort()
console.log(coolWeapons2) // notice the order in the return
const coolWeapons3 = ["bazooka", "M16", "light Saber", "Blaster", "Ninja Star", 324, 1006]
coolWeapons3.sort()
console.log(coolWeapons3) // here also order of precedence notice
const coolWeapons4 = ["bazooka", "M16", "light Saber", "Blaster", "Ninja Star", 324, 1006]
coolWeapons4.sort((a, b) => a - b)
console.log(coolWeapons4)
// to fix the mix of string and numbers:
let sortArr = (arr) =>{
    let numArr = arr.filter((el) => typeof el === "number").sort((a, b) => a - b)
    let strArr = arr.filter((el) => typeof el === "string").sort()
    return numArr.concat(strArr)
}

const newWeaponsArr = sortArr(coolWeapons4)
console.log(newWeaponsArr)



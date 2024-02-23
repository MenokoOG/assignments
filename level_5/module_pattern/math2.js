// module pattern lesson v school, menoko og, 2-23-24
// Revealing method
let factor = 2

function multiply(num){
    return num * factor
}

function setFactor(newFactor){
    factor = newFactor
}

module.exports = {multiply, setFactor, }
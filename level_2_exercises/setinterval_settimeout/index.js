//
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0
let intervalId
timer.textContent = count

function incrementTimer() {
    count++
    timer.textContent = count
}

startBtn.addEventListener("click", function () {
    // intervalId = setInterval(incrementTimer, 1000)
    intervalId = setTimeout(incrementTimer, 1000)
})

stopBtn.addEventListener("click", function () {
    // clearInterval(intervalId)
    clearTimeout(intervalId)
})

let myVar = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById("GFG")
        .innerHTML += "<p>Hi</p>";
}



const display =document.getElementById("time-display")

let getTime = () => {
    let now = new Date()
    let hour = now.getHours()
    let min =now.getMinutes()
    let sec = now.getSeconds()
    // to fix display problem when time element less than 10
    if(hour < 10){
        hour = `0${hour}`
    }
    if(min < 10){
        min = `0${min}`
    }
    if(sec < 10){
        sec = `0${sec}`
    }

    display.textContent = `${hour}: ${min}: ${sec}`
}
setInterval(getTime, 1000)
// setTimeout and setInterval lessons, menoko og, 1-15-24
let sayHelloEl = document.getElementById("say-hello")
let sayHello = () =>{
     sayHelloEl.textContent = "Hello!!!!!!"
     console.log("Hello!!!!!!")

    
}

let stopSayingHello = () => {
    clearInterval(intervalID)
}

let intervalID = setInterval(sayHello, 1000)

setTimeout(stopSayingHello, 6000)






// a clock on webpage
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
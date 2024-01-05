//anonymous function

function myAdd(){
    console.log( 2 + 2)
}

myAdd()

let myOtherFunc = function(){  //here this is anonymous function that has been assigned to variable myOtherFunc

}

myOtherFunc()

document.getElementById("submit-button").addEventListener("click", function(){

}) // kinda like lambda functions in Python, one use functions.

// good way for doing event stuff is to pass a assigned function in 

function myFunc(){

}

document.getElementById("submit-button").addEventListener("click", myFunc)
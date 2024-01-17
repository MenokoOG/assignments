// error handling, menoko og, 1-17-24
try {
    // try out some code
    // if an error is thrown
    if(2 === 2){
        throw new Error("hey I am an error!")
    }
}
catch(err){
    // handle the error
    console.log(err)
}
finally {
    console.log("I am running no matter what!")
}

let input = "";

try {
  if(input == "") {
    throw "Input can not be empty";
  } else if(input.length > 5) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}

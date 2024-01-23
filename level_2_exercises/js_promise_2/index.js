// promises part 2, menoko og, 1-22-24
// resolve - then
// reject  - catch

// thenable

const flipCoin = () =>{
    return new Promise((resolve, reject) =>{
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve("Heads!")
        }else if(randomNum === 1){
            reject("Tails!")
        }
    })
}

flipCoin()
.then(response => console.log(`Resolved: ${response}`))
.catch(error => console.log(`Rejected: ${error}`))

const getData = () =>{
    return new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
}

getData()
    .then(res => console.log("RESOLVED"))
    .catch(err => console.log(err))

// Promise.resolve("Something").then(response => console.log(response))
// Promise.catch()


// my practice
const orderPizza = new Promise((resolve, reject) => {
    // Simulating pizza preparation (asynchronous)
    setTimeout(() => {
      const isPizzaReady = true;
  
      if (isPizzaReady) {
        resolve("Yay! Pizza is ready 🍕")
      } else {
        reject("Oh no! Pizza is not ready 😢")
      }
    }, 2000); // 2000 milliseconds (2 seconds) delay
  })
  
  const addToppings = (message) => {
    return new Promise((resolve) => {
      // Simulating adding toppings (asynchronous)
      setTimeout(() => {
        resolve(`${message} + Mushrooms 🍄`)
      }, 1000); // 1000 milliseconds (1 second) delay
    })
  }
  
  // Ordering and handling the promise asynchronously
  orderPizza
    .then((message) => {
      console.log("Step 1:", message)
      return addToppings(message)
    })
    .then((finalMessage) => {
      console.log("Step 2:", finalMessage);
    })
    .catch((error) => {
      console.error(error);
    })
  
  console.log("Waiting for pizza to be ready... 🕒")
  
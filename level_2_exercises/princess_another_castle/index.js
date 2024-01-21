//princess assignment, menoko og, 1-  -24

class Player {
    // Constructor to initialize player properties
    constructor() {
      this.name = "";
      this.totalCoins = 0;
      this.status = "Powered Up";
      this.hasStar = false;
    }
  
    // Method to set the player's name
    setName(namePicked) {
      this.name = namePicked;
    }
  
    // Method called when player is hit by an enemy
    gotHit() {
      switch (this.status) {
        case "Powered Up":
          this.status = "Big";
          break;
        case "Big":
          this.status = "Small";
          break;
        case "Small":
          this.status = "Dead";
          break;
      }
      this.checkStar(); // Check if the player has a star
    }
  
    // Method called when a powerup is received
    gotPowerup() {
      switch (this.status) {
        case "Small":
          this.status = "Big";
          break;
        case "Big":
          this.status = "Powered Up";
          this.hasStar = true;
          break;
        case "Powered Up":
          this.hasStar = true;
          break;
      }
    }
  
    // Method to add a coin to totalCoins
    addCoin() {
      this.totalCoins++;
      // Check if the player gets a powerup for every 10 coins
      if (this.totalCoins % 10 === 0) {
        this.gotPowerup();
      }
    }
  
    // Method to handle star logic when player is hit
    checkStar() {
        if (this.hasStar) {
          this.hasStar = false; // If the player has a star, it is consumed
        } else if (this.status !== "Dead") {
          this.gotHit(); // If no star and player is not dead, continue regular hit logic
        }
      }
      
  
    // Method to print player details to the console
    print() {
      console.log(`Name: ${this.name}`);
      console.log(`Total Coins: ${this.totalCoins}`);
      console.log(`Status: ${this.status}`);
      console.log(`Star: ${this.hasStar ? "Yes" : "No"}`);
    }
  }
  
  // Function to generate random integer within a range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Create a player object
  const player = new Player();
  player.setName("Mario");
  
  // Set interval to simulate random events until the player is dead
  const intervalId = setInterval(() => {
    // Generate a random value (0, 1, or 2)
    const randomValue = getRandomInt(0, 2);
  
    // Perform action based on the random value
    switch (randomValue) {
      case 0:
        player.gotHit();
        break;
      case 1:
        player.gotPowerup();
        break;
      case 2:
        player.addCoin();
        break;
    }
  
    // Print player details
    player.print();
  
    // Check if the player is dead, and clear the interval if so
    if (player.status === "Dead") {
      clearInterval(intervalId);
    }
  }, 1000); // Interval set to 1000 milliseconds (1 second)
  
  
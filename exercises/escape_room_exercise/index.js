// Exercise for V School, Lawrence "Menoko OG" Jefferson II, Date: 1-9-24

const readline = require("readline-sync")

class RoomEscapeGame {
  constructor() {
    this.hasKey = false
    this.isDoorOpen = false
    this.isHandInHole = false
  }

  startGame() {
    console.log("You find yourself locked in a room. Escape the room to survive!")
    this.gameLoop()
  }

  displayOptions() {
    console.log("Options:")
    console.log("1. Find the key")
    console.log("2. Put hand in hole")
    console.log("3. Open the door")
  }

  findKey() {
    console.log("You search the room and find a key!")
    this.hasKey = true
  }

  putHandInHole() {
    console.log("You put your hand in the hole and unfortunately, you die.")
    this.isHandInHole = true
  }

  openDoor() {
    if (this.hasKey) {
      console.log("Congratulations! You've successfully escaped the room!")
      this.isDoorOpen = true
    } else {
      console.log("The door is locked. You need to find the key first.")
    }
  }

  gameLoop() {
    while (!this.isDoorOpen && !this.isHandInHole) {
      this.displayOptions();
      const choice = readline.question("Enter your choice (1-3): ")
// to better handle edge case
      switch (choice) {
        case "1":
          this.findKey()
          break;
        case "2":
          this.putHandInHole()
          break;
        case "3":
          this.openDoor()
          break
        default:
          console.log("Invalid choice. Please enter a number between 1 and 3.")
      }
    }
  }
}

const game = new RoomEscapeGame()
game.startGame()

// assignment for v school, menoko og 1-15-24
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const clickCountElement = document.getElementById("clickCount")
    const timerElement = document.getElementById("timer")
    const clockImage = document.getElementById("clockImage")

    // Initialize click count
    let clickCount = parseInt(localStorage.getItem("clickCount")) || 0

    // Update click count on page load
    clickCountElement.textContent = `Click Count: ${clickCount}`

    // Handle clicks
    document.body.addEventListener("click", function () {
        clickCount++
        clickCountElement.textContent = `Click Count: ${clickCount}`
        localStorage.setItem("clickCount", clickCount.toString())
    });

    // Countdown timer
    const timerDuration = 20; // Set the duration in seconds
    let remainingTime = timerDuration

    function updateTimer() {
        timerElement.textContent = `Time Remaining: ${remainingTime}s`
        remainingTime--

        if (remainingTime < 0) {
            document.body.removeEventListener("click", handleButtonClick)
            timerElement.textContent = "Time's up!"
        } else {
            setTimeout(updateTimer, 1000)
        }
    }

    // Start the timer
    updateTimer()
});



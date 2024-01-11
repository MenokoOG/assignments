// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to the "Back to Top" buttons
    var backToTopButtons = document.querySelectorAll(".back-to-top-button");
    
    backToTopButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Scroll back to the top of the page
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
});

// script.js
const text = "Coming soon...";
let index = 0;
const outputElement = document.getElementById('output');
const typingSpeed = 110; // Speed of typing effect

function typeText() {
    if (index < text.length) {
        outputElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Show "Who are we?" text after typing effect
        setTimeout(function() {
            document.getElementById('who-are-we').classList.add('show');
        }, 500); // Delay for a better effect

        // Show the link after the "Who are we?" text
        setTimeout(function() {
            document.getElementById('link-container').classList.add('show');
        }, 1500); // Delay to show link after "Who are we?"
    }
}

// Start typing effect
typeText();

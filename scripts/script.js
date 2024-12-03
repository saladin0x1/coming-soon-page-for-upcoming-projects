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

        // Show the link and rabbit image after the "Who are we?" text
        setTimeout(function() {
            document.getElementById('link-container').classList.add('show');
            document.querySelector('.svg-container').classList.add('show');
        }, 1500); // Delay to show link and image together
    }
}

// Start typing effect
typeText();

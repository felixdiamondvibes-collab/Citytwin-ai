// ==========================================
// CITY TWIN AI
// utilities.js
// Shared Helper Functions
// ==========================================

// Random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random item from array
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Format percentage
function percentage(value) {
    return value + "%";
}

// Update text safely
function updateText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}

// Console message
console.log("✅ utilities.js Loaded");

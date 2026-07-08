// ==========================================
// CITY TWIN AI
// utilities.js
// Shared Helper Functions
// ==========================================

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}

function formatTemperature(temp) {
    return `${Math.round(temp)}°C`;
}

console.log("✅ utilities.js loaded");

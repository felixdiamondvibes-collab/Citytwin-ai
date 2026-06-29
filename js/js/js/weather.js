// ==========================================
// CITY TWIN AI
// weather.js
// OpenWeather API
// ==========================================

// ===========================
// PASTE YOUR API KEY HERE
// ===========================

const OPENWEATHER_API_KEY = "";

// ===========================
// Load Weather
// ===========================

async function loadWeather(city = "Lagos") {

    if (OPENWEATHER_API_KEY === "c7a3f070629757965db59f37fe699086") {
        console.warn("OpenWeather API key not added.");
        return;
    }

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        if (data.cod != 200) {

            updateText("weatherStatus", "Weather unavailable");

            return;

        }

        updateText(
            "weatherStatus",
            `${Math.round(data.main.temp)}°C • ${data.weather[0].main}`
        );

    }

    catch(error){

        console.error(error);

        updateText(
            "weatherStatus",
            "Connection Error"
        );

    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadWeather("Lagos");

});

console.log("✅ weather.js Loaded");

// ========================================
// CITY TWIN AI v3.0
// ========================================

// ---------- WEATHER API ----------

const API_KEY = "c7a3f070629757965db59f37fe699086";

async function loadWeather(city = "Lagos") {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            console.error(data.message);
            return;
        }

        document.getElementById("weatherStatus").textContent =
            `${Math.round(data.main.temp)}°C • ${data.weather[0].main}`;

    } catch (error) {

        console.error("Weather API Error:", error);

    }

}

// ========================================
// WORLD MAP
// ========================================

const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

    attribution: "&copy; OpenStreetMap contributors"

}).addTo(map);

// ========================================
// SMART CITIES
// ========================================

const cities = [

{
name:"Lagos",
coords:[6.5244,3.3792],
info:"AI Traffic & Flood Monitoring"
},

{
name:"London",
coords:[51.5074,-0.1278],
info:"Smart Transport Network"
},

{
name:"New York",
coords:[40.7128,-74.0060],
info:"Infrastructure Analytics"
},

{
name:"Dubai",
coords:[25.2048,55.2708],
info:"AI Innovation Hub"
},

{
name:"Singapore",
coords:[1.3521,103.8198],
info:"Digital Twin Platform"
},

{
name:"Tokyo",
coords:[35.6762,139.6503],
info:"AI Prediction Center"
},

{
name:"Paris",
coords:[48.8566,2.3522],
info:"Climate Intelligence"
}

];

// ========================================
// MAP MARKERS
// ========================================

cities.forEach(city => {

L.marker(city.coords)

.addTo(map)

.bindPopup(`<b>${city.name}</b><br>${city.info}`);

});

// ========================================
// CITY SELECTOR
// ========================================

const selector = document.getElementById("citySelector");

selector.addEventListener("change", () => {

const city = cities.find(c => c.name === selector.value);

if(city){

map.flyTo(city.coords,10);

loadWeather(city.name);

}

});

// Load default weather

loadWeather("Lagos");

async function loadEarthquakes() {

    try {

        const response = await fetch(
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );

        const data = await response.json();

        if (data.features.length > 0) {

            const quake = data.features[0];

            const magnitude = quake.properties.mag;
            const place = quake.properties.place;

            document.getElementById("earthquakeStatus").textContent =
                `M${magnitude} • ${place}`;

        } else {

            document.getElementById("earthquakeStatus").textContent =
                "No earthquakes today";

        }

    } catch (error) {

        console.error(error);

        document.getElementById("earthquakeStatus").textContent =
            "Unavailable";

    }

}

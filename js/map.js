// ==========================================
// CITY TWIN AI
// map.js
// World Map
// ==========================================

let map;

const cities = [
    {
        name: "Lagos",
        coords: [6.5244, 3.3792],
        info: "AI Traffic & Flood Monitoring"
    },
    {
        name: "London",
        coords: [51.5074, -0.1278],
        info: "Smart Transport Network"
    },
    {
        name: "New York",
        coords: [40.7128, -74.0060],
        info: "Infrastructure Analytics"
    },
    {
        name: "Dubai",
        coords: [25.2048, 55.2708],
        info: "AI Innovation Center"
    },
    {
        name: "Singapore",
        coords: [1.3521, 103.8198],
        info: "Digital Twin Platform"
    },
    {
        name: "Tokyo",
        coords: [35.6762, 139.6503],
        info: "AI Prediction Center"
    },
    {
        name: "Paris",
        coords: [48.8566, 2.3522],
        info: "Climate Intelligence"
    }
];

function initializeMap() {

    map = L.map("map").setView([20, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    cities.forEach(city => {

        L.marker(city.coords)
            .addTo(map)
            .bindPopup(`<b>${city.name}</b><br>${city.info}`);

    });

    const selector = document.getElementById("citySelector");

    if (selector) {

        selector.addEventListener("change", function () {

            const city = cities.find(c => c.name === this.value);

            if (city) {

                map.flyTo(city.coords, 10);

                if (typeof loadWeather === "function") {
                    loadWeather(city.name);
                }

            }

        });

    }

    console.log("✅ Map Loaded");

                                  }

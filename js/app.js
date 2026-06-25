const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const cities = [
    { name: "Lagos", coords: [6.5244, 3.3792], info: "AI Traffic & Flood Monitoring" },
    { name: "London", coords: [51.5074, -0.1278], info: "Smart Transport Network" },
    { name: "New York", coords: [40.7128, -74.0060], info: "AI Infrastructure Analytics" },
    { name: "Dubai", coords: [25.2048, 55.2708], info: "Smart City Innovation Hub" },
    { name: "Singapore", coords: [1.3521, 103.8198], info: "AI Urban Management" },
    { name: "Tokyo", coords: [35.6762, 139.6503], info: "AI Prediction Center" },
    { name: "Paris", coords: [48.8566, 2.3522], info: "Climate & Energy Monitoring" }
];

cities.forEach(city => {
    L.marker(city.coords)
        .addTo(map)
        .bindPopup(`<b>${city.name}</b><br>${city.info}`);
});
const selector = document.getElementById("citySelector");

selector.addEventListener("change", function () {
    const selectedCity = cities.find(city => city.name === this.value);

    if (selectedCity) {
        map.flyTo(selectedCity.coords, 10);
    }
});
// ===== CITYTWIN AI ANALYTICS =====

// Traffic Chart
new Chart(document.getElementById("trafficChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Traffic Flow",
            data: [120, 150, 180, 170, 220, 200, 250],
            borderColor: "#00d4ff",
            backgroundColor: "rgba(0,212,255,0.2)",
            fill: true,
            tension: 0.4
        }]
    }
});

// Energy Chart
new Chart(document.getElementById("energyChart"), {
    type: "bar",
    data: {
        labels: ["North", "South", "East", "West"],
        datasets: [{
            label: "Energy Usage",
            data: [65, 80, 72, 90],
            backgroundColor: [
                "#4CAF50",
                "#FFC107",
                "#2196F3",
                "#F44336"
            ]
        }]
    }
});

// Air Quality Chart
new Chart(document.getElementById("airChart"), {
    type: "doughnut",
    data: {
        labels: ["Good", "Moderate", "Poor"],
        datasets: [{
            data: [65, 25, 10],
            backgroundColor: [
                "#4CAF50",
                "#FFC107",
                "#F44336"
            ]
        }]
    }
});

// Water Consumption Chart
new Chart(document.getElementById("waterChart"), {
    type: "pie",
    data: {
        labels: ["Residential", "Industrial", "Commercial"],
        datasets: [{
            data: [45, 35, 20],
            backgroundColor: [
                "#2196F3",
                "#9C27B0",
                "#FF9800"
            ]
        }]
    }
});
const trafficStates=["Normal","Busy","Heavy"];
const weatherStates=["Sunny","Cloudy","Rainy"];
const powerStates=["Stable","High Load","Maintenance"];
const floodStates=["Low","Medium","High"];

setInterval(()=>{

document.getElementById("trafficStatus").textContent=
trafficStates[Math.floor(Math.random()*trafficStates.length)];

document.getElementById("weatherStatus").textContent=
weatherStates[Math.floor(Math.random()*weatherStates.length)];

document.getElementById("powerStatus").textContent=
powerStates[Math.floor(Math.random()*powerStates.length)];

document.getElementById("floodStatus").textContent=
floodStates[Math.floor(Math.random()*floodStates.length)];

},4000);

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

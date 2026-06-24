const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([6.5244, 3.3792])
.addTo(map)
.bindPopup("<b>Lagos</b><br>City Twin AI Active");

L.marker([40.7128, -74.0060])
.addTo(map)
.bindPopup("<b>New York</b><br>Traffic Monitoring");

L.marker([51.5074, -0.1278])
.addTo(map)
.bindPopup("<b>London</b><br>Infrastructure Monitoring");

L.marker([35.6762, 139.6503])
.addTo(map)
.bindPopup("<b>Tokyo</b><br>AI Prediction Center");

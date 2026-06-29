// ==========================================
// CITY TWIN AI
// charts.js
// Analytics Charts
// ==========================================

let trafficChart;
let energyChart;
let airChart;
let waterChart;

function initializeCharts() {

    // ---------- Traffic ----------
    const trafficCanvas = document.getElementById("trafficChart");

    if (trafficCanvas) {

        trafficChart = new Chart(trafficCanvas, {

            type: "line",

            data: {

                labels: [
                    "Mon","Tue","Wed","Thu","Fri","Sat","Sun"
                ],

                datasets: [{

                    label: "Traffic Flow",

                    data: [120,150,180,170,220,200,250],

                    borderColor: "#00d4ff",

                    backgroundColor: "rgba(0,212,255,.2)",

                    fill: true,

                    tension: .4

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    // ---------- Energy ----------
    const energyCanvas = document.getElementById("energyChart");

    if (energyCanvas) {

        energyChart = new Chart(energyCanvas, {

            type: "bar",

            data: {

                labels: [

                    "North",
                    "South",
                    "East",
                    "West"

                ],

                datasets: [{

                    label: "Energy Usage",

                    data: [65,80,72,90],

                    backgroundColor: [

                        "#4CAF50",
                        "#FFC107",
                        "#2196F3",
                        "#F44336"

                    ]

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    // ---------- Air ----------
    const airCanvas = document.getElementById("airChart");

    if (airCanvas) {

        airChart = new Chart(airCanvas, {

            type: "doughnut",

            data: {

                labels: [

                    "Good",
                    "Moderate",
                    "Poor"

                ],

                datasets: [{

                    data: [65,25,10],

                    backgroundColor: [

                        "#4CAF50",
                        "#FFC107",
                        "#F44336"

                    ]

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    // ---------- Water ----------
    const waterCanvas = document.getElementById("waterChart");

    if (waterCanvas) {

        waterChart = new Chart(waterCanvas, {

            type: "pie",

            data: {

                labels: [

                    "Residential",
                    "Industrial",
                    "Commercial"

                ],

                datasets: [{

                    data: [45,35,20],

                    backgroundColor: [

                        "#2196F3",
                        "#9C27B0",
                        "#FF9800"

                    ]

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    console.log("✅ Charts Loaded");

}

document.addEventListener("DOMContentLoaded", initializeCharts);

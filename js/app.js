// ========================================
// CITY TWIN AI v2.0
// ========================================

// ---------- WORLD MAP ----------

const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

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
        info:"AI Innovation Center"
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

cities.forEach(city=>{

    L.marker(city.coords)

    .addTo(map)

    .bindPopup("<b>"+city.name+"</b><br>"+city.info);

});

const selector=document.getElementById("citySelector");

selector.addEventListener("change",function(){

    const city=cities.find(c=>c.name===this.value);

    if(city){

        map.flyTo(city.coords,10);

    }

});

// ---------- TRAFFIC CHART ----------

const trafficChart=new Chart(

document.getElementById("trafficChart"),

{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Traffic Flow",

data:[120,160,180,150,220,210,240],

borderColor:"#00d4ff",

backgroundColor:"rgba(0,212,255,.25)",

fill:true,

tension:.4

}]

}

});

// ---------- ENERGY CHART ----------

const energyChart=new Chart(

document.getElementById("energyChart"),

{

type:"bar",

data:{

labels:["North","South","East","West"],

datasets:[{

label:"Energy",

data:[65,72,80,91]

}]

}

});

// ---------- AIR QUALITY ----------

const airChart=new Chart(

document.getElementById("airChart"),

{

type:"doughnut",

data:{

labels:["Good","Moderate","Poor"],

datasets:[{

data:[70,20,10]

}]

}

});

// ---------- WATER ----------

const waterChart=new Chart(

document.getElementById("waterChart"),

{

type:"pie",

data:{

labels:["Residential","Industrial","Commercial"],

datasets:[{

data:[45,35,20]

}]

}

});
// ========================================
// LIVE CITY STATUS
// ========================================

const trafficStates = ["Normal", "Moderate", "Heavy"];
const weatherStates = ["Sunny", "Cloudy", "Rain", "Storm"];
const powerStates = ["Stable", "High Load", "Unstable"];
const floodStates = ["Low", "Medium", "High"];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateCityStatus() {

    document.getElementById("trafficStatus").textContent =
        randomItem(trafficStates);

    document.getElementById("weatherStatus").textContent =
        randomItem(weatherStates);

    document.getElementById("powerStatus").textContent =
        randomItem(powerStates);

    document.getElementById("floodStatus").textContent =
        randomItem(floodStates);

    updatePrediction();
    updateCityHealth();
}

updateCityStatus();
setInterval(updateCityStatus, 5000);

// ========================================
// AI PREDICTION ENGINE
// ========================================

function updatePrediction() {

    const traffic = document.getElementById("trafficStatus").textContent;
    const weather = document.getElementById("weatherStatus").textContent;
    const power = document.getElementById("powerStatus").textContent;
    const flood = document.getElementById("floodStatus").textContent;

    let message = "✅ AI predicts normal city operations.";

    if (traffic === "Heavy") {
        message =
            "🚦 Heavy traffic detected. AI recommends alternative routes.";
    }

    if (weather === "Storm") {
        message =
            "⛈ Storm detected. AI recommends emergency preparedness.";
    }

    if (power === "Unstable") {
        message =
            "⚡ Power instability detected. Backup systems recommended.";
    }

    if (flood === "High") {
        message =
            "🌊 High flood risk detected. Emergency response advised.";
    }

    document.getElementById("predictionText").textContent = message;
}

// ========================================
// CITY HEALTH SCORE
// ========================================

function updateCityHealth() {

    let health = 100;

    if (document.getElementById("trafficStatus").textContent === "Heavy")
        health -= 20;

    if (document.getElementById("weatherStatus").textContent === "Storm")
        health -= 15;

    if (document.getElementById("powerStatus").textContent === "Unstable")
        health -= 25;

    if (document.getElementById("floodStatus").textContent === "High")
        health -= 30;

    if (health < 0) health = 0;

    document.getElementById("cityHealth").textContent = health + "%";
}

// ========================================
// LIVE CHART UPDATES
// ========================================

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateCharts() {

    trafficChart.data.datasets[0].data = [
        randomNumber(100, 250),
        randomNumber(100, 250),
        randomNumber(100, 250),
        randomNumber(100, 250),
        randomNumber(100, 250),
        randomNumber(100, 250),
        randomNumber(100, 250)
    ];

    energyChart.data.datasets[0].data = [
        randomNumber(50, 100),
        randomNumber(50, 100),
        randomNumber(50, 100),
        randomNumber(50, 100)
    ];

    airChart.data.datasets[0].data = [
        randomNumber(50, 80),
        randomNumber(10, 30),
        randomNumber(5, 20)
    ];

    waterChart.data.datasets[0].data = [
        randomNumber(30, 60),
        randomNumber(20, 40),
        randomNumber(10, 30)
    ];

    trafficChart.update();
    energyChart.update();
    airChart.update();
    waterChart.update();
}

setInterval(updateCharts, 5000);

updatePrediction();
updateCityHealth();
updateCharts();

console.log("✅ City Twin AI v2.0 Loaded Successfully");

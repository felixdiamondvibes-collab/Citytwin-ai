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

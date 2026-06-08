// Lagos map

const map = L.map('map').setView([6.5244, 3.3792], 11);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution:'CITY TWIN AI'
}
).addTo(map);

// Monitoring points

const locations = [

{
  name:"Ikeja",
  lat:6.6018,
  lng:3.3515,
  traffic:"High Traffic"
},

{
  name:"Lekki",
  lat:6.4698,
  lng:3.5852,
  traffic:"Medium Traffic"
},

{
  name:"Surulere",
  lat:6.4969,
  lng:3.3831,
  traffic:"Low Traffic"
}

];

locations.forEach(location => {

let color;

if(location.traffic==="High Traffic"){
  color="red";
}
else if(location.traffic==="Medium Traffic"){
  color="orange";
}
else{
  color="green";
}

L.circleMarker(
[location.lat, location.lng],
{
 radius:10,
 color:color,
 fillColor:color,
 fillOpacity:0.8
}
)
.addTo(map)
.bindPopup(
`<b>${location.name}</b><br>${location.traffic}`
);
function predictTraffic() {

  const hour = new Date().getHours();

  let prediction;

  if (hour >= 7 && hour <= 10) {
    prediction = "Heavy Traffic Expected";
  }
  else if (hour >= 17 && hour <= 20) {
    prediction = "Rush Hour Active";
  }
  else {
    prediction = "Traffic Normal";
  }

  document.getElementById("prediction").innerText =
    prediction;
  document.getElementById("weatherRisk").innerText =
"Low Risk";
}

predictTraffic();
  
});
const hour = new Date().getHours();

if(hour >= 17 && hour <= 20){
  console.log("Rush hour active");
}
function updateCityHealth(){

 let score = 85;

 document.querySelector(".health-score")
 .innerText = score + "%";
}
const cities = {

lagos: [6.5244, 3.3792, 11],

abuja: [9.0765, 7.3986, 11],

portharcourt: [4.8156, 7.0498, 11]

};

document
.getElementById("citySelect")
.addEventListener("change", function(){

 const city = this.value;

 map.setView(
   [
     cities[city][0],
     cities[city][1]
   ],
   cities[city][2]
 );

});
const alerts = [

"🚦 Heavy traffic detected in Ikeja",

"🌧 Flood risk rising in Lekki",

"⚡ Energy demand increasing",

"🚑 Emergency services normal"

];

const container =
document.getElementById("alertsContainer");

alerts.forEach(alert => {

 const div =
 document.createElement("div");

 div.className = "alert-card";

 div.innerText = alert;

 container.appendChild(div);

});
updateCityHealth();
const messages = [

"Traffic congestion expected to increase tomorrow.",

"Flood risk remains low across monitored zones.",

"Energy demand projected to rise by 6%.",

"Infrastructure health remains stable."

];

const randomMessage =
messages[Math.floor(
Math.random()*messages.length
)];

document
.getElementById("advisorMessage")
.innerText = randomMessage;

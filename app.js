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

});

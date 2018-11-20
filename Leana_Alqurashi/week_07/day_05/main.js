// 1. URL
const apiURL = "http://api.open-notify.org/iss-now.json";

fetch(apiURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const location = data.iss_position;

    document.body.innerHTML += `<h2>Latitude: ${location.latitude}</h2>`;

    document.body.innerHTML += `<h2>Longitude: ${location.longitude}</h2>`;
  });
// function initMap() {
//   var myLatLng = { lat: -25.363, lng: 131.044 };
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: "Hello World!"
//   });
// }
// initMap();

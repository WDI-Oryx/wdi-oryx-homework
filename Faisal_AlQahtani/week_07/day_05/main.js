const apiURL = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "JSON";

const locationContainer = document.getElementById("location-info");

const btn = document.getElementById("btn");
btn.addEventListener("click", function currentLoaction() {
  fetch(apiURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      html(data);
    });
});

function html(info) {
  var htmlstring =
    "<p> The Current Location is: Latitude (" +
    info.iss_position.latitude +
    ") Longitude (" +
    info.iss_position.longitude +
    ").</p>";

  locationContainer.insertAdjacentHTML("beforeend", htmlstring);
}

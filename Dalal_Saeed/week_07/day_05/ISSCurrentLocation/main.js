const apiURL = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "JSON";

function turnResponseIntoObject(response) {
  return response.json();
}
// { "message": "success", "timestamp": 1542460780, "iss_position": { "latitude": "-14.2914", "longitude": "-90.3880" } }
function displayLocation(data) {
  const location = data.iss_position;
  const current = location.latitude;
  const longitude = location.longitude;

  document.body.innerHTML = current + " " + longitude;
}

function poll() {
  fetch(apiURL)
    .then(turnResponseIntoObject)
    .then(displayLocation);
}

setInterval(function() {
  poll();
}, 5000);

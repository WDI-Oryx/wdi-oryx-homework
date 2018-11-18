const apiURL = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "JSON";

fetch(apiURL)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    const position = data.iss_position;

    const long = document.querySelector("#long");
    const lat = document.querySelector("#lat");
    long.innerHTML += position.longitude;
    lat.innerHTML += position.latitude;
  });

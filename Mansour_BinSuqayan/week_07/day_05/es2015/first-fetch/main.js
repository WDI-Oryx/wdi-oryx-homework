const apiURL = "http://api.open-notify.org/astros";
const method = "GET";
const dataType = "JSON";

fetch(apiURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
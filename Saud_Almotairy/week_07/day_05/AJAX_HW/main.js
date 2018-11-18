const URL = "http://api.open-notify.org/iss-now";

const method = "GET";

const dataType = "JSON";

fetch(URL, { method: method, dataType: dataType }).then(function(response) {
  return response.json().then(function(data) {
    document.body.innerHTML = `${data.iss_position.latitude} <br> ${
      data.iss_position.longitude
    } <br>`;
  });
});

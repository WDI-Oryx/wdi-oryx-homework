const apiURL = "http://api.open-notify.org/iss-now";

const method = "GET";

const DataType = "JSON";

function refresh() {
  fetch(apiURL, { method: method, dataType: DataType }).then(function(
    response
  ) {
    return response.json().then(function(data) {
      console.log(data.iss_position.latitude);
      document.body.innerHTML += `<h2> latitude: ${
        data.iss_position.latitude
      }</h2>
    <h2>longitude: ${data.iss_position.longitude}</h2>=====`;
    });
  });

  // make Ajax call here, inside the callback call:
  setTimeout(refresh, 5000);
  // ...

  document.body.innerHTML = "";
}
setTimeout(refresh, 3000);

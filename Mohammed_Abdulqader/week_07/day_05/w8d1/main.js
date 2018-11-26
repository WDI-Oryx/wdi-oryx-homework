const apiURL = "http://api.open-notify.org/iss-now";
const method = "Get";
const dataType = "JSON";
fetch(apiURL, { method: method, dataType: dataType })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.iss_position.latitude);
    document.body.innerHTML += `
     <h2>latitude: ${data.iss_position.latitude}</h2>
      <h2> longatude: ${data.iss_position.longitude}</h2>`;
    // document.body.innerHTML = "";
  });

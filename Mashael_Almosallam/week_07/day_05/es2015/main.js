console.log("JS Connected");

// SHIFT + COMMAND + R => To Refresh

// Questions to answer with API:
// 1. URL
const apiURL = "http://api.open-notify.org/iss-now.json";
/* 2. Type of request asking or sending
        a. METHOD */
// ALL IN CAPS
const method = "GET";
/* 3.Data type
    ALL IN CAPS*/
// a.	Is it JSON or HTML
const dataType = "JSON";
// 4. PARAMS
fetch(apiURL, { method: method, dataType: dataType }).then(function (response) {
    //console.log(response);
    return response.json();
}).then(function (data) {
    const position = data.iss_position;
    document.body.innerHTML += `<h2>The current latitude & longitude</h2>`
    document.body.innerHTML += `<p>Latitude: ${position.latitude}</p>`
    document.body.innerHTML += `<p>Longitude: ${position.longitude}</p>`
}); 
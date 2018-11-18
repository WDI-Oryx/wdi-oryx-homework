const apiURL = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "JSON";

fetch(apiURL).then(function (response) {
    return response.json();
}).then(function (data) {
    const position = data.iss_position;
    document.body.innerHTML += `
        <h1>International Space Station Current Location</h1>
        `;
    document.body.innerHTML += `
        <h3>Longitude: ${position.longitude}</h3>
        <p>Latitude: ${position.latitude}</p>
        `;
});


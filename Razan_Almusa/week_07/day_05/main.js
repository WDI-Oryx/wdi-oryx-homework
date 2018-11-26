const apiURL = "http://api.open-notify.org/iss-now.json";
const method = "GET";
const dataType = "JSON";

function turnResponseIntoObject(response) {
    return response.json();
}

function display(data) {
    const position = data.iss_position;
    document.body.innerHTML += position.latitude;
    document.body.innerHTML += position.longitude;
}


fetch(apiURL)
    .then(turnResponseIntoObject)
    .then(display);

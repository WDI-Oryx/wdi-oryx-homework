const api = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "JSON";

function responsAPI(response) {
    return response.json();
}

function dataAPI(data) {
    document.body.innerHTML = ` <p> latitude: ${data.iss_position.latitude}</p> longitude: ${data.iss_position.longitude}`
}

fetch(api,{method: method , dataType: dataType})
.then(responsAPI)
.then(dataAPI);
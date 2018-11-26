const apiURL = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "application/json";
const httpOptions = {
    method: method
};

function turnResponseIntoObject(response){
    return response.json();
}

function displayData(data){
    const html = `
    <h2>The Latitude : ${data.iss_position.latitude}</h2>
    <h2>The Longitude: ${data.iss_position.longitude}</h2>
    `;
   document.querySelector("#container").innerHTML += html;
}

fetch(apiURL, httpOptions).then(turnResponseIntoObject).then(displayData);
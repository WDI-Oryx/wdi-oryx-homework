
const method = "GET";

const dataType = "application/json";

const httpOptions = {
    method: method
};

const form = document.querySelector("form");

function turnResponseIntoObject(response) {
    return response.json();
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const baseURL = `http://www.omdbapi.com/?t=${input.value}&apikey=24684590`;
    fetch(baseURL, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);
});

function displayData(data) {
    var div = document.querySelector(".container")
    div.innerHTML = `<h1>  ${data.Title} </h>
    <h2>${data.Year}</h2>
    <p>${data.Actors}</p>
    `;
}
var input = document.querySelector("input");
var button = document.querySelector("button");
button.addEventListener("submit", function() {
    
});
    


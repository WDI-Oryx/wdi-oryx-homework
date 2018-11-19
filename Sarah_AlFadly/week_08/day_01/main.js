const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apiKey = "3a8821f5";
const method = "GET";
const baseURL = "http://www.omdbapi.com";
const params = `?apikey=${apiKey}`;
const url = baseURL + params;
const httpOptions = {
    method: method
};

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(info) {
    const html = `
    <h2>${info.Title}</h2>
    <img src="${info.Poster}">
    <p>Year: ${info.Year}</p>
    <p>Genre: ${info.Genre}</p>
    <p>Writer: ${info.Writer}</p>
  `;
    container.innerHTML = html;
}

function getMovie(searchTerm) {
    container.innerHTML = "<h2>Loading...</h2>";
    fetch(url + `&t=${searchTerm}`, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);   
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault(); 
    // getMovie(input.value);

    var w = window.open(window.location.href);
    w.onload = function () {
        w.getMovie(input.value);
    }; 
});
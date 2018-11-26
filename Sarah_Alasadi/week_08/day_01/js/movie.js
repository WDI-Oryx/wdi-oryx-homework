const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apiKey = "4c2cbe5";
const method = "GET";
const baseURL = "http://www.omdbapi.com";
const path = "/?i=tt3896198";
const params = `&apikey=${apiKey}`;
const url = baseURL + path + params;
const httpOptions = {
    method: method
};

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(info) {
    const html = `
    <h2>Here is your Movie</h2>
    <h3> ${info.Title} </h3>
    <img src="${info.Poster}">
    <p> ${info.Year} </p>
    <p> ${info.Genre} </p>
    <p> IMDB ${info.imdbRating} </p>
    <p> ${info.Plot} </p>
    <p> ${info.Language} </p>
    <p> ${info.Country} </p>
    <p> ${info.Actors} </p>
    <p> ${info.Writer} </p>
  `;

    container.innerHTML = html;
}

function getMov(searchTerm) {
    container.innerHTML = "<h2>Loading...</h2>";
    fetch(url + `&tag=${searchTerm}`, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    getMov(input.value);
});
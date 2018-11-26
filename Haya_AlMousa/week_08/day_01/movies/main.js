const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const method = "GET";
const apiURL = "http://www.omdbapi.com/?apikey=79c3416f";
const httpOptions = {
    method: method
};

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(title) {
    const html = `
    <h2>Here is your Movie</h2>
    <p>Title: ${title.Title}</p>
    <p>Plot: ${title.Plot}</p>
    <img src="${title.Poster}">
  `;
    container.innerHTML = html;
}

function getMovie(searchTerm) {
    console.log(searchTerm)
    fetch(apiURL + `&t=${searchTerm}`, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    getMovie(input.value);
});
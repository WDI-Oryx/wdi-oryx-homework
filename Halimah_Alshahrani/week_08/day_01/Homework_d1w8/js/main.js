
const apiURL = "http://www.omdbapi.com/?apikey=4a4bd136";
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const method = "GET";
const dataType = "JSON";

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(data) {
    const html= `
    <h1>${data.Title}</h1>
    <img src="${data.Poster}">
     <p> ${data.Year} </p>
    <p> ${data.Genre} </p>
     <p>Director: ${data.Director} </p>
      <p>Actors: ${data.Actors} </p>
    <p> IMDB: ${data.imdbRating} </p>
    <p> ${data.Plot} </p>
   
    `;
container.innerHTML = html;
}


function getMovies(movieName){

    fetch(apiURL + `&t=${movieName}`)
        .then(turnResponseIntoObject)
        .then(displayData);
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    getMovies(input.value);
});
const baseURL = "http://www.omdbapi.com/";
const idPath = "&i=";
const searchPath = "&s=";
const api_key = "?apikey=ae2ec317";
const method = "GET";
const dataType = "application/json";
var url = baseURL + api_key;
var extra = '';
const httpOptions = {
    method: method
};

const form = document.querySelector('form');
const filmDiv = document.querySelector("#movie");
const search = document.querySelector('#search');

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(data) {
    filmDiv.innerHTML = '';
    if (data.Title) {
        filmDiv.innerHTML = `<h2>${data.Title}</h2>
        <img src='${data.Poster}'>
        <p>Director: ${data.Director}</p>
        <p>Rated: ${data.Rated}</p>
        <p>Genre: ${data.Genre}</p>
        `;
    } else {
        for (let film of data.Search) {
            filmDiv.innerHTML += `
    <h2 id="${film.imdbID}">${film.Title}</h2>
    `;
        }
        const titles = document.querySelectorAll("h2");
        for (let title of titles) {
            title.addEventListener("click", function () {
                const titleText = title.getAttribute('id');
                extra = idPath + titleText;
                getMovies();
            });
        }
    }
}

function getMovies() {
    fetch(url + extra, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);
}


form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    extra = searchPath + search.value;
    getMovies();
});



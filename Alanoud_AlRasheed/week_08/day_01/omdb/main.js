const baseURL = "http://www.omdbapi.com/";
const titlePath = "&t=";
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
        filmDiv.innerHTML = `${data.Title}`;
    } else {
        for (let film of data.Search) {
            filmDiv.innerHTML += `
    <h2>${film.Title}</h2>
    `;
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


filmDiv.addEventListener("click", function () {
    const title = document.querySelector("h2");
    const titleText = title.innerText;
    extra = titlePath + titleText;
    getMovies();
});

// select from - input - .container
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
// api key
const apiKey = "65603c9e";
// method
const method = "GET";
// data Type
const dataType = "JSON";
// base url
const baseURL = "http://www.omdbapi.com/";
// Params || Body
const params = `&apikey=${apiKey}`;
//path
const path = '?i=tt3896198';

const url = baseURL + path +  params;

console.log(url);

const httpOptions = {
  method: method,
  dataType: dataType
};

function turnResponseInToJsonObject(response) {
  return response.json();
}

function displayData(info) {
  const html = `<h2>${info.Title}</h2>
      <img src="${info.Poster}">
      <p>${info.Plot}</p>
      <p>Year: ${info.Year} </p>
      <p>Genre: ${info.Genre} </p>
      <p> IMDB rating: ${info.imdbRating} </p>
    <button onclick="reload()">Back</button>`;
  console.log(info);
  container.innerHTML = html;

}

function reload() {
  location.reload();
}

function getMovies(movie) {
  fetch(url + `&t=${movie}`, httpOptions)
    .then(turnResponseInToJsonObject)
    .then(displayData);

}
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  getMovies(input.value);
});


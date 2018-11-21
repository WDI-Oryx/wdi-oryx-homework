const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apiKey = "fd339ee5";
const method = "GET";
const baseURL = "http://www.omdbapi.com/";
const path = ""; ///v1/gifs/random
const params = `?apikey=${apiKey}`; //http://www.omdbapi.com/?i=tt3896198&apikey=fd339ee5
const url = baseURL + path + params; //

const httpOptions = {
  method: method
};

function turnResponseIntoObject(response) {
  return response.json();
  console.log("d", response.json);
}

function displayData(data) {
  console.log("d", data);
  const html = `
    <h2>Here is your movie</h2>
    <h2>${data.Title}</h2>
    <img src="${data.Poster}">
    <h3>Genre:${data.Genre}</h3>
  `;
  container.innerHTML = html;
}

function getMovie(searchTerm) {
  container.innerHTML = "<h2>Loading...</h2>";
  fetch(url + `&t=${searchTerm}`, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  getMovie(input.value);
});

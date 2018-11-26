const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apiKey = "d250cfec";
const method = "GET";
const baseURL = "http://www.omdbapi.com";
const params = `?&apikey=${apiKey}`;
const url = baseURL + params;

const httpOptions = {
  method: method
};
function turnResponseIntoObject(response) {
  return response.json();
}
function displayData(data) {
  const html = `
    <h2>Here is your Movie</h2>
    <h2>Title:${data.Title}</h2>
    <h2>plot:${data.Plot}</h2>
    <img src = "${data.Poster}">


    
  `;
  container.innerHTML = html;
}

function getMovie(searchTerm) {
  console.log(searchTerm);
  fetch(url + `&t=${searchTerm}`, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  getMovie(input.value);
});

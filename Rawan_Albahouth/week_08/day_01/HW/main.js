const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apikey = "f1002a52";
const method = "GET";
const baseURL = "http://www.omdbapi.com";
const params = `?apikey=${apikey}&t=`;
// const url = baseURL + params;

const httpOptions = {
  method: method
};

function displayData(data) {
  const html = `
    <h2> ${data.Title} </h2>
    <img src="${data.Poster}">
    <p> ${data.Plot} </p>
    `;
  container.innerHTML = html;
}

function getMovie() {
  const title = document.querySelector("#search").value;
  const url = baseURL + params + title;

  fetch(url, httpOptions)
    .then(r => r.json())
    .then(displayData);
}

form.addEventListener("submit", function(prev) {
  prev.preventDefault();
  getMovie();
});

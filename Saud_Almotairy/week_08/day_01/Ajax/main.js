const baseURL = "http://www.omdbapi.com/";

const apiKey = "49549918";
const params = `?apikey=${apiKey}&t=`;

const url = baseURL + params;

const method = "GET";

const dataType = "json";

const httpOptions = {
  method: method
};
// const input = document.querySelector("input");
// const button = document.querySelector("button");
const container = document.querySelector(".container");

// fetch (url, httpOptions)
// function turnResponseIntoObject() {
//   return response.json();
//   console.log(response.json());
// }
function turnResponseIntoObject(response) {
  return response.json();
}

function displayData(info) {
  const html = `
    <h2>Movie Title: ${info.Title}</h2>
    <img src="${info.Poster}">
    <p> ${info.Plot}</p>
  `;
  container.innerHTML = html;
}
// // fetch (baseURL,)
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", function() {
  fetch(url + input.value, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
});

// form.addEventListener("submit", function(ev) {
//   ev.preventDefault();
//   getGif(input.value);
// });

// function getGif(searchTerm) {
//   container.innerHTML = "<h2>Loading...</h2>";
//   fetch(url + `&tag=${searchTerm}`, httpOptions)
//     .then(turnResponseIntoObject)
//     .then(displayData);
// }

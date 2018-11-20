console.log("Hi");

// select from
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
// api key
const apiKey = "cb51627";
// method
const method = "GET";
// dataType
const dataType = "JSON";
// base url and the params
const baseURL = "http://www.omdbapi.com/";
const params = `?apikey=${apiKey}`;

const url = baseURL + params;

console.log(url);

const httpOptions = {
  method: method,
  dataType: dataType
};

function turnResponseInToJsonObject(response) {
  return response.json();
}

function displayDataInHtml(data) {
  const html = `<h2>${data.Title}</h2>
      <img src="${data.Poster}">
      <p>${data.Plot}</p>`;
  console.log(data);
  container.innerHTML = html;
  //   container.innerHTML += `<form><input type="submit" value="search"></form>`;
  // const form = document.querySelector("form");
  // homePage(form);
  //   console.log(data);
  //   let html = "";
  //   for (let s of data.Search) {
  //     html += `<a href="${url + "&t=" + s.Title}"><h5>${s.Title}</h5></a>`;
  //   }
  //   container.innerHTML = html;
}

function getMovies(moviesName) {
  fetch(url + `&t=${moviesName}`, httpOptions)
    .then(turnResponseInToJsonObject)
    .then(displayDataInHtml);
  //   fetch(url + `&s=${moviesName}`, httpOptions)
  //     .then(turnResponseInToJsonObject)
  //     .then(displayDataInHtml);
}
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  getMovies(input.value);
});
// // getMovies();
// function homePage(form) {
//   form.addEventListener("submit", function(ev) {
//     ev.preventDefault();
//     container.innerHTML = `
//             <h2>Searching for Movies</h2>
//             <form><input type="text" id="search" placeholder="Search:" /></form>
//         `;
//   });
// }

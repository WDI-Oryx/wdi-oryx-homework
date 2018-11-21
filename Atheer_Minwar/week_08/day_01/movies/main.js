const apiURL = "http://www.omdbapi.com/?apikey=4147951b";
const method = "GET";
const dataType = "JSON";
const form = document.querySelector("form");
const input = document.querySelector("input");
const main = document.querySelector(".main");
const httpOptions = {
  method: method
};
// const apiKey = "4147951b"

// const fullUrl =

function turnResponseIntoObject(response) {
  return response.json();
}

document.body.innerHTML = function displayData(data) {
  const print = `<h1>${data.Title}</h1><h3>${data.Director}</h3><img src="${
    data.Poster
  }"><h4>${data.Year}</h4><h4>${data.Genre}</h4><p>${data.Plot}</p>`;
  //   console.log(print);
  main.innerHTML = print;
};

function movieSearch(search) {
  fetch(apiURL + `&t=${search}`, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

form.addEventListener("submit", function(searching) {
  searching.preventDefault();
  movieSearch(input.value);
});

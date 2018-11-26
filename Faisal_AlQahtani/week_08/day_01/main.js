const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const apiKey = "d394f366";
const method = "GET";
// const path = "&t=";
// const params = `?apikey=${apiKey}`;
// const url = baseURL + params + path;
const httpOptions = {
  method: method
};
const inp = document.querySelector("#search");
function getMovie() {
  const baseURL = `http://www.omdbapi.com?apikey=d394f366&t=${inp.value}`;

  fetch(baseURL, httpOptions)
    .then(res => res.json())
    .then(displayData);
}

function displayData(data) {
  const html = ` 
  <h2> ${data.Title}</h2>
  <img src="${data.Poster}">
  <p> ${data.Plot} </p>
      `;
  container.innerHTML = html;
  //  debugger;
}
form.addEventListener("submit", function(e) {
  e.preventDefault();
  getMovie();
  // displayData(input.value);
});

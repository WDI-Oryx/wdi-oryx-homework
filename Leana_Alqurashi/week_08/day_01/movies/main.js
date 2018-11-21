const form = document.querySelector("form");
const input = document.querySelector("input");
const outputDiv = document.querySelector("#app");
const title = document.querySelector("#app h2 a");
const apiKey = "1292010a";
const method = "GET";
const baseURL = "http://www.omdbapi.com/";
const params = `?i=tt3896198&apikey=${apiKey}`;
const url = baseURL + params;
console.log(url);
const button = document.querySelector("button");
button.addEventListener("click", fetchData);
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  console.log(input.value);
});
const httpOptions = {
  method: method
};
function turnResponseIntoObject(response) {
  return response.json();
}
function displayData(data) {
  console.log(data);
  const html = `<h2><a href="">${data.Title}</a></h2>
  <h3>${data.Released}</h3>
  <p>Genre: ${data.Genre}</p>
  <img src="${data.Poster} width= 200px height= 400px">
  <p>${data.Plot}</p>`;
  outputDiv.innerHTML += html;
}
function fetchData() {
  fetch(url + `&t=${input.value}`, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

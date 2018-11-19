const API_KEY = "7088f8cc";
const URL = `http://www.omdbapi.com/?apiKey=${API_KEY}`;
const button = document.querySelector("button");
const container = document.querySelector(".container");
const input = document.querySelector("input");

function turnResponseIntoObject(response) {
  //   console.log(response);
  return response.json();
}
function displayData(info) {
  console.log(info.Search);
  //   console.log(URL);
  console.log("Seasons");
  console.log(info.totalResults);

  if (info.totalResults > 1) {
    for (let i = 0; i < info.Search.length; i++) {
      const name = info.Search[i];
      console.log(name);
      const html = `
    <h2> ${name.Title}</h2>
    `;
      container.innerHTML += html;
    }
  } else {
    const html = `
    <h2> ${info.Search[0].Title}</h2>
        <img src="${info.Search[0].Poster}">
    `;
    container.innerHTML = html;
  }
}
function getData(searchTerm) {
  fetch(URL + `&s=${searchTerm}`)
    .then(turnResponseIntoObject)
    .then(displayData);
}

button.addEventListener("click", function(e) {
  e.preventDefault();
  getData(input.value);
});

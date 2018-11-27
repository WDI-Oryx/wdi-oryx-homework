const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apiKey = "bTSzEaEAerNfbF182dG5IHa47Ffd483f";
const method = "GET";
const baseURL = "https://api.giphy.com";
const path = "/v1/gifs/random";
const params = `?api_key=${apiKey}&rating=g`;
const url = baseURL + path + params;
const httpOptions = {
    method: method
};


function turnResponseIntoObject(response) {
    return response.json();
  }
  
  function displayData(info) {
    const html = `
      <h2>Here is your Gif</h2>
      <img src="${info.data.image_url}">
    `;
    container.innerHTML = html;
  }
  
  function getGif(searchTerm) {
      console.log(searchTerm)
    fetch(url, httpOptions)
      .then(turnResponseIntoObject)
      .then(displayData);
  }
  
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    getGif(input.value);
  });





// URL
//Method
//Data Type
// Params || Body
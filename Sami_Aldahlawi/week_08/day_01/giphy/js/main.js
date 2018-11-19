const form = document.querySelector("form");
const input = document.querySelector("input");
const img = document.querySelector("img");

const apiKey = "CLNh2lk5k8r0D3gH7L0xrYlv4ktLBUcM";
const method = "GET";
const baseURL = "https://api.giphy.com";
const path = "/v1/gifs/random";
const params = `?api_key=${apiKey}&tag=burrito`;
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
  
  function getGif() {
    fetch(url, httpOptions)
      .then(turnResponseIntoObject)
      .then(displayData);
  }
  
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    getGif();
  });
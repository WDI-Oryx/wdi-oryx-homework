const apikey = "lQkYq6PdmwL4TQuhxhfg7Q";
const method = "GET";
const baseURL = "https://www.goodreads.com/search/index.xml";
const params = `?key=${apikey}&q=Something`;
const URL = baseURL + params;
const httpOption = {
  method: method
};

// Add your event listeners
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

// Figure out the URL (in the browser first)
function turnResponseToObject(response) {
  return response.json();
}
function displayData(data) {
  const path = data.search.results.work[0].best_book;
  const html = `
     <h2>Book Name : ${path.title}</h2>
     <h2>Author Name : ${path.author.name}</h2>
     <img src="${path.image_url}"
    `;
  container.innerHTML = html;
}

// Make the fetch request using the URL from before
function displayBook(searchOutput) {
  fetch("https://cors-anywhere.herokuapp.com/" + URL)
    .then(R => R.text())
    .then(data => {
      var jsonObj = parser.parse(data);
      displayData(jsonObj.GoodreadsResponse);
    });
}
// Turn the response into a JS object

// Replace the contents of #app with the data that comes back
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  displayBook(input.value);
});

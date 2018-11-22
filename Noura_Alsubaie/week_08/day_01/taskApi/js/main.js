const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");


const Url = "http://www.omdbapi.com/?i=tt3896198&apikey=e2b55c69";
// const Url = "http://www.omdbapi.com/?s=batman&apikey=e2b55c69";
const method=  "GET";
const httpOptions ={
method: method
};

function turnResponseIntoObject(response){
    return response.json();
}

function displayData(data){
// debugger;
console.log(data);
    const html = `
<h2> Here we go! </h2>
<h4> Movie Title: ${data.Title} </h4>
<p> rating: ${data.imdbRating}</p>
<p> Genre: ${data.Genre}</p>
<img src="${data.Poster}">

`;
    container.innerHTML = html;
    
}
function getfilm(searchTerm) {
const path = `/?s=${searchTerm}`
container.innerHTML = `Loading..`;
fetch(Url+ path, httpOptions)
.then(turnResponseIntoObject)
.then(displayData);
}
form.addEventListener("submit", function (ev) {
ev.preventDefault();    
getfilm(input.value);
});
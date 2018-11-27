const form = document.querySelector('form');
const input = document.querySelector('input');
const container = document.querySelector('.container');
 const apiKey = 'a669280c';
const method = 'GET';
const baseURL = 'http://www.omdbapi.com';
const path = '/?i=tt3896198';
const params = `&apikey=${apiKey}`;
const url = baseURL + path + params;
 const httpOptions = {
	method: method
};
 function turnResponseIntoObject(response) {
	return response.json();
}
 function displayData(info) {
	console.log(info);
	const html = ` 
    <h2> ${info.Title} </h2>
    <img src="${info.Poster}">
    <p> ${info.Year} </p>
    <p> ${info.Genre} </p>
    <p> IMDB ${info.imdbRating} </p>
    <p> ${info.Plot} </p>
    <button onclick="Back()">Back</button> 
    `;
	container.innerHTML = html;
}
 function getMovie(word) {
	fetch(url + `&t=${word}`, httpOptions).then(turnResponseIntoObject).then(displayData);
}
form.addEventListener('submit', function(ev) {
	ev.preventDefault();
	getMovie(input.value);
});
function Back() {
    location.reload();
 }
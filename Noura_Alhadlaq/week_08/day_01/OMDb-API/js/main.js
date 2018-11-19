const form = document.querySelector('form');
const input = document.querySelector('input');
const container = document.querySelector('.container');

const apiKey = '190001ea';
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
    `;
	container.innerHTML = html;
}

function getMovie(term) {
	fetch(url + `&t=${term}`, httpOptions).then(turnResponseIntoObject).then(displayData);
}

// params || body in the front
form.addEventListener('submit', function(ev) {
	ev.preventDefault();
	getMovie(input.value);
});

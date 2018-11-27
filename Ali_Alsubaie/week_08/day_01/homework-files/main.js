// API
const apiKey = "302b41a8";
const baseURL = "http://www.omdbapi.com";
const params = `?apikey=${apiKey}`;
const url = baseURL + params;
const httpOptions = {
	method: "GET",
	dataType: "JSON"
};
// Elements
const form = document.forms[0];
const content = document.querySelector("#content");
const alertDiv = document.querySelector("#alert-area");
// Events
form.addEventListener("submit", searchFor);
alertDiv.addEventListener("click", cancelAlert);

// Functions
// Prepare to search
function searchFor(e) {
	e.preventDefault();
	content.innerHTML = "Searching...";
	const input = form.querySelector("#search-term").value;
	const args = `&s=${input}`;
	fetchData(args, searchMovies);
}
// Fetch
function fetchData(args, callback) {
	fetch(url + args, httpOptions)
		.then(r => r.json())
		.then(callback)
		.catch(err => {
			console.log(err);
		});
}
// Display data
function searchMovies(data) {
	content.innerHTML = "";
	// console.log(data);
	const listContainer = document.createElement("div");
	listContainer.classList.add("list-container");
	if (data.Response === "True") {
		let p = document.createElement("p");
		p.innerHTML = `Results: ${data.totalResults} movies found.`;
		content.appendChild(p);
		for (movie of data.Search) {
			const div = document.createElement("div");
			div.classList.add("list-item");
			div.setAttribute("onclick", `movieClicked("${movie.Title}")`);

			const img = document.createElement("img");
			img.setAttribute("src", movie.Poster);
			div.appendChild(img);

			const h3 = document.createElement("h3");
			h3.innerHTML = movie.Title;
			div.appendChild(h3);

			p = document.createElement("p");
			p.innerHTML = movie.Year;
			div.appendChild(p);

			listContainer.appendChild(div);
			// console.log(movie);
		}
	} else {
		content.innerHTML = data.Error;
	}
	content.appendChild(listContainer);
}

// Movie Clicked
function movieClicked(title) {
	// console.log(title);
	const args = `&t=${title}`;
	fetchData(args, showMovie);
}

// Show movie details
function showMovie(data) {
	alertDiv.classList.add("my-alert");

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("alert-container");

	const html = `
		<h4>${data.Title}</h4>
		<img src="${data.Poster}">
		<p><strong>IMDB Rating:</strong> ${
			data.imdbRating
		}/10, <strong>Votes:</strong> ${data.imdbVotes}</p>
		<p><strong>Genre:</strong> ${data.Genre}, <strong>Rated:</strong> ${
		data.Rated
	}</p>
		<p>${data.Released}, ${data.Country}</p>
		<p>${data.Plot}</p>
		<p><strong>Actors:</strong> ${data.Actors}</p>
		<p><strong>Director:</strong> ${data.Actors}</p>
		<p><strong>Writer:</strong> ${data.Writer}</p>
		<p><strong>Production:</strong> ${data.Production}</p>
	`;

	contentDiv.innerHTML = html;

	alertDiv.appendChild(contentDiv);
	setTimeout(() => contentDiv.classList.add("pop"), 100);
	console.log(data);
}

function cancelAlert(e) {
	if (e.target.id === "alert-area") {
		container = document.querySelector(".alert-container");
		container.classList.remove("pop");
		setTimeout(() => {
			alertDiv.classList.remove("my-alert");
			alertDiv.innerHTML = "";
		}, 100);
	}
}

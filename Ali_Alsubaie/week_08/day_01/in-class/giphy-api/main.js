const form = document.forms.search;
const input = form.querySelector("#input");
const term = document.querySelector("#term");
const resultTitle = document.querySelector("#result-title");
const img = document.querySelector("#results");
const containers = document.querySelectorAll(".container");

const apiKey = "tKdnRiTcpBCFVspjf4n84o52il7PklUd";
const baseURL = "https://api.giphy.com";
const method = "GET";
const dataType = "JSON";
const path = "/v1/gifs/random";

let url;
const httpOptions = {
	method: method,
	dataType: dataType
};

form.addEventListener("submit", getInput);

function getInput(e) {
	e.preventDefault();
	for (container of containers) {
		container.style.display = "block";
	}
	document.querySelector(".to-hide").style.display = "none";
	term.innerHTML = input.value == "" ? "No Entery" : input.value;

	img.setAttribute("src", "Loading_icon.gif");
	resultTitle.innerHTML = "Loading...";
	const params = `?api_key=${apiKey}&tag=${input.value}`;
	url = baseURL + path + params;
	console.log(url);
	fetchAPI();
}

function displayData(info) {
	// console.log(info);
	resultTitle.innerHTML = "Here is your Gif:";
	img.setAttribute("src", info.data.image_url);
}

function fetchAPI() {
	fetch(url, httpOptions)
		.then(r => r.json())
		.then(displayData);
}

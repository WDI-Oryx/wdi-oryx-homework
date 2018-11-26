console.log('JS Connected!');
const form = document.querySelector('form');
const input = document.querySelector('input');
const container = document.querySelector('.container');
const apiKey = '53e98857';
const method = 'GET';
const baseURL = 'http://www.omdbapi.com';
const path = '?i=tt3896198';
const params = `&apikey=${apiKey}`;
const url = baseURL + path + params;

const httpOptions = {
    method: method
};

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(info) {

    const html = `
    <h2>Here is your films</h2>
    <p>Film's Title: ${info.Title}</p>
    <p>Year Released: ${info.Year}</p>
    <p>Rating: ${info.Rated}</p>
    <p>Run Time: ${info.Runtime}</p>
    <p>Genre: ${info.Genre}</p>
    <p>Director: ${info.Director}</p>
    <img src='${info.Poster}'>
    `;

    container.innerHTML = html;
}

function getFilm(searchTerm) {
    //console.log(searchTerm);
    fetch(url + `&t=${searchTerm}`, httpOptions).then(turnResponseIntoObject)
        .then(displayData);

}


// params || body in the front 
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    getFilm(input.value);

});
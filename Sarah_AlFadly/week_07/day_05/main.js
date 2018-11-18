const apiURL = "https://api.nasa.gov/planetary/apod?api_key=01GGCqFdx5bncA8PETUzMBgkyrVAZUAGyU5ZfPmX";
const method = "GET";
const dataType = "JSON";

function turnResponseIntoObject(response) {
    return response.json();
}

function displayPlanetary(data) {
    const image = data.url;
    document.body.innerHTML += `<img src=${image} width=300px height=300px>`;

    const title = data.title;
    document.body.innerHTML += `<h1>${title}</h1>`;

    const explanation = data.explanation;
    document.body.innerHTML += `<p>${explanation}</p>`;
}

fetch(apiURL)
    .then(turnResponseIntoObject)
    .then(displayPlanetary);

const apiURL = "https://rickandmortyapi.com/api/character/1,2,3,4,5";
const method = "GET";
const dataType = "JSON";

fetch(apiURL).then(function (response) {
    return response.json();
}).then(function (data) {
    const characters = data;
    document.body.innerHTML += `
        <h1>Rick's Family</h1>
        `;
    for (let i in characters) {
        document.body.innerHTML += `
        <div style="float:left; margin:3px;">
        <h3>Name: ${characters[i].name}</h3>
        <img src=" ${characters[i].image}">
        </div>
        `;
    }
});


const apiKey = "f02c628a";
const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}`;
const method = "GET";
const dataType = "application/json";
const httpOptions = {
    method:method,
    dataType:dataType
};

const form = document.querySelector("form");
const button = document.querySelector("#search");
form.addEventListener("submit",function(){
    console.log(button.value);
    request(button.value);
});
function turnResponseIntoObject(response){
    return response.json();
}

function displayData(data){
    debugger;
    const html = `
    <div class="row">
    <div class="col s12"><p>s12</p></div>
    <div class="col s12"><p>Title: ${data.Title}</p></div>
    <div class="col s12"><p>Plat: ${data.Title}</p></div>
    <div class="col s12"><p>Country: ${data.Country}</p></div>
    <div class="col s12"><p>Year:  ${data.Year}</p></div>
    <div class="col s12"><p>Language:  ${data.Language}</p></div>
    <div class="col s12"><p>Rating: ${data.Ratings[0].Value}</p></div>
    <div class="col s12"><img src="${data.Poster}"></div>
  </div>`;
  document.querySelector(".container").innerHTML = html;
}


function request(value){
    const url = apiURL + `&t=${value}`;
    fetch(url,httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

const apiKey = "ce13607";
const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&`;
//t=Jaws
const method = "GET";
const dataType = "application/json";
const httpOptions = {
    method:method,
    dataType:dataType
};


const button = document.querySelector("form");
const input = document.querySelector("input");
button.addEventListener("submit",function(ev){
    ev.preventDefault();
    const search = `t=${input.value}`;
    res(search);
});


function turnResponseIntoObject(response){
    return response.json();
}

function displayData(data){
   const hiddenElement  = document.querySelector("h2");
   hiddenElement.style.display = "none";
  const html = `
    <h2>Title: ${data.Title}</h2>
    <h2>Plot: ${data.Plot}</h2>
    <h2>Year: ${data.Year}</h2>
    <h2>Source: ${data.Ratings[0].Source}, Rating: ${data.Ratings[0].Value}</h2>
  `;
  document.querySelector("#box").innerHTML = html;
}
//+ `t=${input.value}`
function res(value){
    fetch(apiURL + value,httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}




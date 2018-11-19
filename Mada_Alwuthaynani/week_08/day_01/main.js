const baseURL = "http://www.omdbapi.com/";
const apiKey = "5020dc19";
const method = "GET";
let back1value;
let backpage=0;
function goBack() {
    if(backpage==1){
     getGip(back1value);
    backpage=0;
} else{
    location.reload();
    }
}

const url = baseURL;
const form = document.querySelector("form");
const container=document.querySelector(".continer");
const input = document.querySelector("input");
const httpOptions = {
    method: method,
};
function turnResponseIntoObject(responce) {
    console.log("loading");
    return responce.json();
}
function displayData(data) {
    container.innerHTML= "";
    for (movie of data.Search) {
       
        const html = `
    <a href="#" id=${movie.imdbID}>${movie.Title}</a><br>
    `;
    container.innerHTML+= html;
    }
    var a = document.querySelectorAll("a");
    for (var i = 0; i < a.length; i++) {
        result = a[i];
        result.addEventListener("click", function (ev) {
            // ev.preventDefault();
            id = this.id;
            console.log(id);
            getGip2(id);
        });
    }
}
function displayData1(data) {
    console.log();

    // for (movie of data.Search){

    const html3 = ` 
    <h1>Title: ${data.Title}</h1><br>
    <h1>Year: ${data.Year}</h1> <br>
    <h1>Genre: ${data.Genre}</h1> `;
    container.innerHTML=html3;
    //   }


}
function getGip(searchItem) {
    console.log(searchItem);
    fetch(baseURL + `?s=${searchItem}&apikey=${apiKey}`, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);
}
function getGip2(id) {
    console.log(id);
    fetch(baseURL + `?i=${id}&apikey=${apiKey}`, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData1);
        backpage=1;
}
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    back1value=input.value;
    getGip(input.value);
});

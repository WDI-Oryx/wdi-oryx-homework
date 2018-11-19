

var randomMovieArray = ["Star Wars", "Game of Thrones","Runtime"];
var random = Math.floor((Math.random() * randomMovieArray.length ));
var randomMovie = randomMovieArray[random];

//console.log(randomMovie);

const apiKey = "c25113ca-7820-45bb-ac3e-74cb62ea7b96";
const method = "GET";
const baseURL = "https://www.omdbapi.com";
//const path = "/v1/gifs/random";
const params = `?api_key=${apiKey}&tag=burrito`;
const url = baseURL  + params;
//console.log(url)
const httpOptions = {
    method: method
};

function turnResponseIntoObject(Response) {
    //return Response.json;
    console.log(Response);
}

function apiCall(){
    document.getJSON('https://www.omdbapi.com/?i=t' + encodeURI(randomMovie).then(turnResponseIntoObject))
}
apiCall();
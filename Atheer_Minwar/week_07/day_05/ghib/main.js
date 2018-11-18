const mainDiv = document.querySelector("#all");
const logo = document.createElement("img");
logo.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
);

mainDiv.appendChild(logo);
var ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://ghibliapi.herokuapp.com/films", true);

// function turnResponseIntoObject(response) {
//   return response.json();
// }

ourRequest.onload = function() {
  var data = JSON.parse(this.response);

  data.forEach(movie => {
    const print = `
<p> ${movie.title} </p> 

`;
    document.body.innerHTML += print;
  });
};

// turnResponseIntoObject();
ourRequest.send();

var eventType = "click"; 

var randomButtom = document.querySelector("button");


function randomizer () {

    var newImages = document.createElement ("img");
    newImages.setAttribute("src","https://source.unsplash.com/random"
    );
var imagePlace = document.querySelector("body");
imagePlace.appendChild(newImages);
}


randomButtom.addEventListener(eventType,randomizer);



// Allow the user to select the width and the height!


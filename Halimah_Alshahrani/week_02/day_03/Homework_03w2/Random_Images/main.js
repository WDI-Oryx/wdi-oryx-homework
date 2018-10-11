
var eventType = "click";


var myButton = document.querySelector("button#randomize");


function myCallback(){
var createImg = document.createElement("img");

createImg.setAttribute("src", "https://picsum.photos/200/300/?random");

// var random_img = Math.floor(Math.random() * random_images.length);

var Div = document.querySelector("div.image");
Div.appendChild("random_img");

}
myButton.addEventListener("click", myCallback);

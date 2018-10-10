

//When someone clicks button#randomize:
// Create an img element
// Create a URL based on this documentation

var eventType = "click";
var myButton = document.querySelector("#randomize");
function itsCallback (){
    
var image0 = document.createElement("img");
image0.setAttribute("src", "https://source.unsplash.com/500x500");
var theTarget = document.querySelector("div.image");
theTarget.appendChild(image0);

}
myButton.addEventListener(eventType, itsCallback); 





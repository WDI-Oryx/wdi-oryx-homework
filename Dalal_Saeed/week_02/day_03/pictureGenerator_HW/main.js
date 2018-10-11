// The type of event
var eventType = "click";
// The target of the event
var myButton = document.querySelector("#randomize");
var randomImg  = document.createElement("img");
var imgHolder = document.querySelector(".image");
// The callback - what do you want to do as a response?
function myCallback() {
 randomImg.setAttribute("src","https://source.unsplash.com/1600x900")
}
imgHolder.appendChild(randomImg)
// Create an event listener
// WHEN this EVENT takes place on this TARGET, call this CALLBACK FUNCTION
myButton.addEventListener(eventType, myCallback);

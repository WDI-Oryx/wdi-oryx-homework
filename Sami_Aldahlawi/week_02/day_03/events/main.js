var eventType = "click";
var myButton = document.querySelector("button");

function myCallback(){
    document.body.style.backgroundColor = "red";
}


myButton.addEventListener(eventType,myCallback);
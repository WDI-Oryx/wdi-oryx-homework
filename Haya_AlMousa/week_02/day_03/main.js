
var eventType = "click";

var randomImg = document.querySelector("#randomize");

function createImg () {

    var myimages= new array()

myimages[1]="https://picsum.photos/200/300"
myimages[2]="https://picsum.photos/200/100"
myimages[3]="https://picsum.photos/200/400"

var randomNum=Math.floor(Math.random()*myimages.length)

document.getElementById("randomize").src = myimages[randomNum];

}

randomImg.addEventListener(eventType, createImg);

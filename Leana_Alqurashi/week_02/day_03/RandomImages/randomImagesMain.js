/*

When someone clicks button#randomize:
Create an img element
Create a URL based on this documentation
e.g. It might look something like this: https://source.unsplash.com/1600x900

*/

var myButton = document.querySelector("button#randomize");
var body = document.querySelector("body");
function myCallback() {
    newImg = document.createElement("img");
    newImg.setAttribute("src", "https://source.unsplash.com/random/900x600");
    body.appendChild(newImg);
}
myButton.addEventListener("click", myCallback);

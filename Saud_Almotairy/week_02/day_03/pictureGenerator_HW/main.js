console.log("Hello")

var imgRandButton = document.querySelector("#randomize");

function genImg() {
  var randomImg = document.createElement("IMG");
randomImg.setAttribute("src", "https://source.unsplash.com/random/1600x900");
var divImage = document.querySelector("div.image");
divImage.appendChild(randomImg);
}


imgRandButton.addEventListener("click", genImg);
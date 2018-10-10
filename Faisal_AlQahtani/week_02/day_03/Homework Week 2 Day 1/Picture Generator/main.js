// var img = document.querySelector("#randomize");

// function randomImg() {
//     var image = document.createElement("img");
//     var content = img.value;
//     content.setAttribute("src", "https://source.unsplash.com/1600x900");
//     var newPicDiv = document.querySelector("div");
//     newPicDiv.appendChild(content);
// }

// img.addEventListener("click", randomImg);

var clickCount = 0;
var clickCounterButton = document.querySelector("button.click");

function onClick() {
    console.log("Hello");
}

clickCounterButton.addEventListener("click", onClick);
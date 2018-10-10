var button = document.querySelector("button#randomize");

function randomImage() {
    var image = document.createElement("img");
    var width = document.querySelector("input.width").value;
    var height = document.querySelector("input.height").value;
    image.setAttribute("src", "https://source.unsplash.com/" + width + "x" + height);
    document.body.appendChild(image);
}

button.addEventListener("click", randomImage);
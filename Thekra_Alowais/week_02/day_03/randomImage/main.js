var buttonRandom = document.querySelector("#randomize");
var dopDownList = {
    unsplash: "https://source.unsplash.com/1600x900",
    Picsum: "https://picsum.photos/200",
    FillMurray: "https://fillmurray.com/200/300",
    PlaceCage: "https://www.placecage.com/200/300",
    LoremFlickr: "https://loremflickr.com/320/240",
}
function randomImages() {
    var newImage = document.createElement("img");
    var widthInput = document.querySelector("input.width");
    var heightInput = document.querySelector("input.height");
    var dopDownInput = document.querySelector("select");
    item = dopDownInput.value;
    // console.log(item);
    width = widthInput.value;
    height = heightInput.value;
    newImage.setAttribute("width", width);
    newImage.setAttribute("height", height);
    var newURL = dopDownList[item];
    // console.log(newURL);
    newImage.setAttribute("src", newURL);
    buttonRandom.appendChild(newImage);

}
buttonRandom.addEventListener("click", randomImages);
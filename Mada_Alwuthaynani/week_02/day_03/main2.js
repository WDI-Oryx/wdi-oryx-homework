
var btn = document.querySelector("button#randomize");
btn.addEventListener("click", fun);
function fun() {
    console.log("ujyh");
    var img = document.createElement("img");
    var set = img.setAttribute("src", "https://source.unsplash.com/random/800x600");
    document.querySelector("div.image").appendChild(img);
}
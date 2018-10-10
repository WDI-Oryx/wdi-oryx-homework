
// When someone clicks button#randomize:
// Create an img element

var myButton = document.querySelector("button#randomize");

function createImg() {

    var image = document.createElement("img");
    image.setAttribute("src","https://source.unsplash.com/200x300");
    document.body.appendChild(image);

    // Create a URL based on this documentation
    // e.g. It might look something like this: https://source.unsplash.com/1600x900 

    var anchor = document.createElement("a");
    anchor.innerHTML = "Random Pictures";
    anchor.setAttribute("href","https://source.unsplash.com/200x200");
    document.body.appendChild(anchor);
}

myButton.addEventListener("click", createImg);
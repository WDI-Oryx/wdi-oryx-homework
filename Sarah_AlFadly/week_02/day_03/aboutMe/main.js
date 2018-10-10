// Change the font-family of the page
document.body.style.fontFamily = "Arial, sans-serif";

// Replace each of the span tags with information
document.querySelector("span#nickname").innerText = "SY";
document.querySelector("span#favorite").innerText = "Horses";
document.querySelector("span#hometown").innerText = "Riyadh";

// Add classes to the list items and change their text color
var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "listitem");
    listItems[i].style.color = "rebeccapurple";
}

// Create new image
var image = document.createElement("img");
image.setAttribute("src", "developer.png");
document.querySelector(".profilePicture").appendChild(image);


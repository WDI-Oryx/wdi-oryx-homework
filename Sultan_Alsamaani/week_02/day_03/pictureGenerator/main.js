// - Create and link a JavaScript file
// - When someone clicks `button#randomize`:
var btn = document.querySelector("button#randomize");
//   - Create an `img` element
//   - Create a URL based on [this documentation](https://source.unsplash.com/)
//     - e.g. It might look something like this: `https://source.unsplash.com/1600x900`
var divImage = document.querySelector("div.image");
var inputWidth = document.querySelector("input.width");
var inputheight = document.querySelector("input.height");
var image = document.createElement("img");
divImage.appendChild(image)
function addImage()
{
    image.setAttribute("src","https://source.unsplash.com/"+inputWidth.value+"x"+inputheight.value);
}
btn.addEventListener("click",addImage);


// ## Bonuses

// ### Bonus 1

// Allow the user to select the width and the height!

// ### Bonus 2

// Allow the user to select where their image comes from using a dropdown

// Suggested options:

// - [Picsum](https://picsum.photos/)
// - [Fill Murray](http://www.fillmurray.com/)
// - [Place Cage](http://www.placecage.com/)
// - [Lorem Flickr](https://loremflickr.com/)


function createImage() {
  var newImg= document.createElement('img');
  newImg.setAttribute('src','https://source.unsplash.com/random');
  var imgDiv = document.querySelector(".image");
  imgDiv.appendChild(newImg);
}

var imgButton = document.querySelector('button');

imgButton.addEventListener('click', createImage);


function createImage() {

  var newImg = document.createElement('img');
  var userWidth = document.querySelector('.width');
  var imgWidth = userWidth.value;
  var userHeight = document.querySelector('.height');
  var imgHeight = userHeight.value;
  var userSite = document.querySelector('select');
  var imgSite = userSite.options[userSite.selectedIndex].value;
  newImg.setAttribute('src', imgSite + imgWidth.toString() + '/' + imgHeight.toString());
  var imgDiv = document.querySelector(".image");
  imgDiv.appendChild(newImg);
}

var imgButton = document.querySelector('button');

imgButton.addEventListener('click', createImage);
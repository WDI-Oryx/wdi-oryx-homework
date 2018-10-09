function displayRandomImage() 
{
     var theImages = [
         {
        src: "https://cdn2.momjunction.com/wp-content/uploads/2015/02/Hispanic-Baby-Names-For-Your-Little-Boy.jpg",
        width: "200",
        height: "360"
    }, {
        src: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/baby_0.jpg?itok=IWI25DB9&resize=1100x1100",
        width: "328",
        height: "295"
    }, {
        src: "https://i.ytimg.com/vi/DSnbZUjIyAc/maxresdefault.jpg",
        width: "500",
        height: "544"
    }];
    
    var randI = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        randI[i] = new Image();
        randI[i].src = theImages[i].src;
        randIr[i].width = theImages[i].width;
        randI[i].height = theImages[i].height;
    }

  function getRandom(min,max) {  
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return randI[imn];
    }  

  
var newImage = getRandom(0, randI.length - 1);
 
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
document.body.appendChild(newImage);
}
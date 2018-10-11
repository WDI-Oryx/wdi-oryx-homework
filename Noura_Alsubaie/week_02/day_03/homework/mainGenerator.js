

var typeOfEvent = "click"; 
var buttonR = document.querySelector("#randomize"); 


function createRandomImage() {
    
    var userW= document.querySelector(".width");
   
    var width = userW.value;
    
    var userH= document.querySelector(".height");
    
    var height = userH.value;
   
    var imgR= document.createElement("img");
    
    imgR.setAttribute("src", "https://source.unsplash.com/"+width+"x"+height);
    
    var target = document.querySelector("div.image");
    
    target.innerHTML = "";
    
    target.appendChild(imgR);
}


buttonR.addEventListener(typeOfEvent, createRandomImage);


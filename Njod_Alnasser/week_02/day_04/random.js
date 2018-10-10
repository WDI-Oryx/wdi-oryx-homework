 var button = document.querySelector("#randomize");
var inputWidth= document.querySelector(".width");
var inputHeight= document.querySelector(".height");



 function photo()
    {   
        var width= inputWidth.value;
        var height= inputHeight.value;
        var img = document.createElement("img");
         img.setAttribute("src", "https://source.unsplash.com/");
        document.body.appendChild(img);
         
    }

     button.addEventListener("click" , photo);
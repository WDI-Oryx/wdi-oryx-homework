

var button = document.querySelector("#randomize");
var inputW = document.querySelector(".width");
var inputH = document.querySelector(".height");






function addPhoto()
    {   
        var w= inputW.value;
        var h= inputH.value;
        var img = document.createElement("img");
        var text = "https://source.unsplash.com/"+w+"x"+h
        img.setAttribute("src", text);
        document.body.appendChild(img);

        
    }

    button.addEventListener("click" , addPhoto);
var images = document.querySelector(".image");

var btn = document.querySelector("#randomize");
btn.addEventListener("click", randomize);


var paths = {
    picsum: "https://picsum.photos//",
    fillMurray: "http://www.fillmurray.com/",
    placeCage: "http://www.placecage.com/",
    loremFlicker: "https://loremflickr.com/"
}
var path = "";

function randomize (e){
    var val1 = document.querySelector(".width").value,
        val2 = document.querySelector(".height").value;
    
    if(val1 === "")
        val1 = "200";
    if(val2 === "")
        val2 = "200";
        
    var selectEl = document.querySelector("#source");
    var selected = selectEl.options[selectEl.selectedIndex].value;
    
    for(link in paths){
        if(selected === link)
            path = paths[link];
    }
    console.log(path);
    var newImg = document.createElement("img");
    newImg.setAttribute("src", path + "/" + val1 + "/" + val2);
    images.appendChild(newImg);
    images.appendChild(document.createElement("br"));
}
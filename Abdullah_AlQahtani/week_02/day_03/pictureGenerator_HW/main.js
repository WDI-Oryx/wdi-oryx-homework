var button = document.querySelector("#randomize");
button.addEventListener("click" , onClick );

function onClick() {
    var image = document.createElement("img");
    document.body.appendChild(image);
    var width = document.querySelector(".width").value;
    var height = document.querySelector(".height").value;
    var dropMenu = document.querySelector("#menu");
    var website = dropMenu.options[dropMenu.selectedIndex].value;
    //console.log(width.value + height.value);
    image.setAttribute("src", "https://"+ website +"/" + width + "/" + height);
}
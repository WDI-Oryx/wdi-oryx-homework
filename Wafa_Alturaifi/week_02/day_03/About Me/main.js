

var fontstyle = document.querySelectorAll("body");

fontstyle.style.Fontfamily="Arial, sans-serif";

document.getElementById("nicknamet").className = "MyClass1";

document.getElementById("favorite").className = "MyClass2";

document.getElementById("hometown").className = "MyClass3";

document.querySelectorAll("li").classList.add("listitem");

var listyle = document.querySelectorAll(".listitem");
for (var i = 0; i < listyle.length; i += 1) {
    var currentItem = listyle[i];

 listyle.style.color="rebeccapurple";
}

var newimg = document.createElement("img");
newimg.setAttribute("src","https://source.unsplash.com/1600x900");
document.body.appendChild(newimg);

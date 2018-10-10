

var newimg =document.createElement("img");

newimg.setAttribute("src", "https://source.unsplash.com/1600x900");

document.body.appendChild(newimg);

var mybutton = document.querySelector("#randomiz");
var imgstylewidth  =getComputedStyle(newimg ,width);
var input = document.querySelector(".width");
var currentwidth =  document.imgstyle.style.width= ".width";
// console.log(currentwidth);
input.value = "300px";

var imgstyleheigh  =getComputedStyle(newimg ,heigh);
var input = document.querySelector(".heigh");
var input2 = document.querySelector(".heigh");
var currentheigh = document.imgstyle.style.heigh= ".heigh";
// console.log(currentheigh);
input.value = "300px";


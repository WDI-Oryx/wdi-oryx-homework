console.log('starter1.js linked');
var num = 0;
var hov = document.querySelectorAll(".zone");
function hover() {
    this.classList.toggle("green");
}
function click() {
    this.removeEventListener('mouseover', hover);
    this.removeEventListener('mouseleave', hover);
    num++;
    if (num === 4) {
        console.log("congrats");
    }
}
for (var i = 0; i < hov.length; i++) {
    hov[i].addEventListener("mouseover", hover);
    hov[i].addEventListener("mouseleave", hover);
    hov[i].addEventListener("click", click);
}

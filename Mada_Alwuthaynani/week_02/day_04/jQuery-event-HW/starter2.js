console.log('starter2.js linked');
var arr = ['zone-4', 'zone-2', 'zone-3', 'zone-1'];
var num = 0;
var current = arr[num];
var hov = document.querySelectorAll(".zone");
function hover() {
    console.log(this.id);
    if (this.id === current) {
        this.classList.toggle("green");
    }
    else {
        this.classList.toggle("red");
    }
}
function click() {
    console.log(this.id);
    if (this.id === current) {
        this.removeEventListener('mouseover', hover);
        this.removeEventListener('mouseleave', hover);
        num++;
        if (num === 4) {
            console.log("congrats");
        }
        current = arr[num];
    }
}
for (var i = 0; i < hov.length; i++) {
    // console.log(hov[i].id);
    hov[i].addEventListener("mouseover", hover);
    hov[i].addEventListener("mouseleave", hover);
    hov[i].addEventListener("click", click);
}
//code goes here

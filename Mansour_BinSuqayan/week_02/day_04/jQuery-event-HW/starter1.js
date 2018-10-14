console.log('starter1.js linked');

//code
var totalClick = 0;

var allZone = document.querySelectorAll(".zone");
var totalBox = allZone.length;

var firstBox = document.querySelector("#zone-1");
var secondBox = document.querySelector("#zone-2");
var thirdBox = document.querySelector("#zone-3");
var fourthBox = document.querySelector("#zone-4");
var fifthBox = document.querySelector("#zone-5");
var sixthBox = document.querySelector("#zone-6");

function turnGreen(event){
    this.style.background = "green";
}
function turnWhite (event ){
  this.style.background ="white";
}
function clickColor (event){
    this.removeEventListener("mouseover",turnGreen);
    this.removeEventListener("mouseout",turnWhite);
    this.removeEventListener("click",clickColor);
    totalClick++;
    if (totalClick == totalBox ){
        alert("Winner");
    }

}

firstBox.addEventListener("mouseover",turnGreen);
firstBox.addEventListener("mouseout",turnWhite );
firstBox.addEventListener("click",clickColor);

secondBox.addEventListener("mouseover",turnGreen);
secondBox.addEventListener("mouseout",turnWhite );
secondBox.addEventListener("click",clickColor);

thirdBox.addEventListener("mouseover",turnGreen);
thirdBox.addEventListener("mouseout",turnWhite );
thirdBox.addEventListener("click",clickColor);

fourthBox.addEventListener("mouseover",turnGreen);
fourthBox.addEventListener("mouseout",turnWhite );
fourthBox.addEventListener("click",clickColor);

fifthBox.addEventListener("mouseover",turnGreen);
fifthBox.addEventListener("mouseout",turnWhite );
fifthBox.addEventListener("click",clickColor);

sixthBox.addEventListener("mouseover",turnGreen);
sixthBox.addEventListener("mouseout",turnWhite );
sixthBox.addEventListener("click",clickColor);

var clickCount = 0;
var clickCounterButton = document.querySelector("button.click");

console.log(clickCounterButton);

function onClick(){
    clickCount += 1;
    var elementCount = document.querySelector(".clickCount");
    elementCount.innerText = clickCount;
}

var x = document.querySelector(".x");
var y = document.querySelector(".y");

function onMouseMove(even){

    x.innerText = "X " +even.clientX;
    y.innerText = "Y "+ even.clientY;
}

clickCounterButton.addEventListener("click",onClick);

window.addEventListener("mousemove",onMouseMove);



function makeTextRed(){
    this.style.color = "red";
}

var firstItem = document.querySelector(".one");
var secondItem = document.querySelector(".two");
var threeItem = document.querySelector(".three");
firstItem.addEventListener("click",makeTextRed);
secondItem.addEventListener("click",makeTextRed);
threeItem.addEventListener("click",makeTextRed);
console.log('starter1.js linked');

//code goes here

var squareOne = document.querySelector("#zone-1");
var squareTwo = document.querySelector("#zone-2");
var squareThree = document.querySelector("#zone-3");
var SquareFour = document.querySelector("#zone-4");
var count = 0;
function green(event){
    this.classList.add("green");
    this.addEventListener("click",none);
    this.addEventListener("mouseout",white);
    console.log("Count = " + count);
}
function white(event){
        this.setAttribute("class","zone");
        this.removeEventListener("mouseout",white);
        console.log("Count = " + count);
}
function none(event){
    this.removeEventListener("mouseover",green);
    this.removeEventListener("mouseout",white);
    this.removeEventListener("click",none);
    count += 1;
    console.log("Count = " + count);
    if(count == 4){
        alert("congratulations");
    }
}


squareOne.addEventListener("mouseover", green);
squareTwo.addEventListener("mouseover", green);
squareThree.addEventListener("mouseover", green);
SquareFour.addEventListener("mouseover", green);



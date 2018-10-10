document.querySelector("#half-button").addEventListener("click", halfNumber);
document.querySelector("#half-input").addEventListener("input", halfNumber);
function halfNumber(e){
    var input = document.querySelector("#half-input").value;
    if(input === "") return;
    var val = parseInt(input);
    document.querySelector("#solution").innerHTML = "Half " + input + " is " + val/2;
}


document.querySelector("#area-button").addEventListener("click", getArea);
document.querySelector("#area-input").addEventListener("input", getArea);

function getArea(e){
    var input = document.querySelector("#area-input").value;
    if(input === "") return;
    var result = Math.PI * Math.pow(input, 2);
    
    document.querySelector("#solution").innerHTML = "The area of a circle with the radius " + input + " is " + result;
}


document.querySelector("#percent-button").addEventListener("click", getPercent);

function getPercent(e){
    var val1 = document.querySelector("#percent1-input").value,
        val2 = document.querySelector("#percent2-input").value;

    if(val1 === "" || val2 === "") return;
    var result = (val1 / val2) * 100;
    document.querySelector("#solution").innerHTML = `The value ${val1} is ${result}% of the value ${val2}`;
}
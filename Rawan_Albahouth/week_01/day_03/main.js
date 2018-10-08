function squareNumber(number){
var result = number * number;
return result;
}

var numSquared = squareNumber(3);
console.log("The resulte of squaring the number" + " " + 3 + " "+ "is"+ " " + numSquared );




function halfNumber(number){
    var result = number / 2;
    return result;
}

var halfNum = halfNumber(4);
console.log("Half of " + " "+ 4 + " " + "is " + " "+ halfNum);



function percentOf(numOne, numTwo){
    var result = numOne / numTwo ;
    var perResult = result * 100;
    return perResult;
}

var percentage = percentOf(4, 10);
console.log(4 +" "+"is"+" "+percentage+" "+"of"+" "+10);



function areaOfCircle(radius){
    var pi = 3.14;
var squareRadius = radius * radius; // area of circle = radius * radius * pi
var result = squareRadius * pi;
    return result;
}

var area = areaOfCircle(4);
console.log("The area for a circle with radius"+" "+ 4 +" "+"is"+" "+ area);

function operations(number){
    var operationOneResult = number / 2;
    var operationTwoResult = operationOneResult * operationOneResult;
    var operationThreeResult = operationTwoResult * operationTwoResult * 3.14;  //3.14 = pi
    
    var squaredResult = operationThreeResult * operationThreeResult ;
    var percent = operationThreeResult / squaredResult;
    var operationFourResult = percent * 100 ;
    return operationFourResult;
    
}

var finalResult = operations(4);
console.log(finalResult);


function canDrive(userAge){
    if (userAge < 18){
        console.log("Sorry you can't drive yet");
    } else if (userAge >= 18){
        console.log("Drive away");
    }
}
canDrive(17);


function translator(language){
    if(language === "eng"){
        console.log("Hello World");
    } else if (language === "french"){
        console.log("Bonjour le monde");
    } else if (language === "arabic"){
        console.log("مرحبا بالعالم");
    }
}

translator("arabic");


function tellFortune(jobTitle, geographic, partnerName, numOfChildren){
    console.log("You will be a"+" "+jobTitle+" "+"in"+" "+geographic+","+" "
    +"and married to"+" "+partnerName+" "+"with"+" "+numOfChildren+" "+"kids.");
}
tellFortune("doctor", "NYC", "Sara", 3);
console.log("Good Morning");


// Conditionals 

var legalDrivingAge = 18;
var usersAge = 4;

if (usersAge >= legalDrivingAge){
    console.log("Drive away! ");
} else {
    console.log("You Can't drive yet");
}


var numOne = 35;
var numTow = 29;

if (numOne > numTow){
    console.log("The biggest number is" + " " + numOne );
} else {
    console.log(numTow + "Is biggest");
}


var studentTotal = 20;

if (studentTotal >= 90){
    console.log("You got A");
} else if (studentTotal < 90 && studentTotal >= 80 ){
    console.log("You got B");
} else if (studentTotal < 80 && studentTotal >= 70){
    console.log("You got C");
} else if (studentTotal < 70 && studentTotal >= 60){
    console.log("You got D");
} else {
    console.log(" Sorry, You fail");
}
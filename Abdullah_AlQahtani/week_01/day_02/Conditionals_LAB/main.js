//what number's bigger?
var numOne = 5;
var numTwo = 10;

console.log(" == What number's bigger? ==")
if (numOne > numTwo) {
    console.log("The Biggest Number is : " + numOne);
} else {
    console.log("The Biggest Number is : " + numTwo);

}

//Driving Age
var legalDrivingAge = 20;
var usersAge = 15;

console.log("\n == Drivin Age ==");
if(usersAge >= legalDrivingAge) {
    console.log("Drive Away!");
} else {
    console.log("Sorry, you have " + (legalDrivingAge - usersAge) + " years to wait until you can drive");
}

//The world Translator
var english = "Hello World";
var arabic = "مرحبا بالعالم";
var frensh = "Bonjour chérie";

var message = arabic;

console.log("\n == The world Translator ==");
if(message == english) {
    console.log(english);
} else if (message ==  arabic) {
    console.log(arabic);
} else if (message == frensh) {
    console.log(frensh);
}

//The Grade Assigner

var grade = 86;

console.log("\n == TThe Grade Assigner ==");
if (grade >= 90) {
console.log("Your Grade is : A");
} else if (grade >=80) {
console.log("Your Grade is B");
} else if (grade >=70) {
console.log("Your Grade is C");
} else if (grade >= 65) {
console.log("Your Grade is D");
} else {
console.log("You recive Failing");
}

//Serge Says


var message = "";

console.log("\n == Serge Says ==");

if ( message.endsWith("?")) {
    console.log("Sure");
} else if (message === message.toUpperCase()) {
     console.log("Woah, chill out!");
} else if (message = "" || message.split) {
    console.log("Fine. Be that way!");
} else {
    console.log("Whatever");
}
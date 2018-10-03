// conotionds assignment 

var numOne = 3;
var numTwo = 7;

if (numOne>numTwo){
    console.log(numOne);
} else {
    console.log(numTwo);
}

var age = 15;
var HowManyYearsLeft = 18 - age;
if (age <= 18){
    console.log("Sorry, you can't drive yet "+ HowManyYearsLeft);
} else {
console.log("Drive away!");
}

var language = "Arabic";
if(language=== "Arabic"){
    console.log("مرحبا بالعالم");
} else if (language === "English"){
    console.log("Hello World");
}else if(language === "French"){
    console.log(" Banjour belle ");
}


var testResults = 40;
if(testResults >= 90 ){
    console.log("A");
}else if (testResults >= 80){
    console.log("B");
} else if(testResults >= 70){
    console.log("C");
} else if (testResults >= 60){
    console.log("D");
} else {
    console.log("F");
}


var currentTemp = 28;
var desiredTemp = 22;
var airconditioner = "functional";
if( airconditioner === "functional" && currentTemp > desiredTemp ){
    console.log("Turn on the A/C Please");
}else if (airconditioner === "non-functional" && currentTemp > desiredTemp){
    console.log(" Fix the A/C now! it's hot!");
} else if (airconditioner === "non-functional" && currentTemp < desiredTemp){
    console.log(" Fix the A/C whenever you have the chance ... it's cool");
}


var userMessage = "greg!"
if (userMessage.endsWith("?")){
    console.log(" Sure");
} else if(userMessage.toUpperCase){
    console.log("Woah");
} else if (userMessage === undefined || userMessage === "  "){
    console.log(" Fine. Be that way!")
} else { 
    console.log(" Whatever.")
}

//variables assignments 

var numOfChildern = 3;
var partnername = "Ahmed ";
var geographicLocation = "Riyadh";
var  jobTitle = "Developer";
console.log("You will be a " + jobTitle +" in " + geographicLocation+", and married to " +partnername+ "with "+ numOfChildern +" kids");


var currentYear = 2018;
var birthYear = 1995;
var birthYear1 = 2000;
var age1 = currentYear - birthYear ;
var age2 = currentYear - birthYear1;
console.log("They are either " +  age1 + " eithe or " +  age2);

 


//What number's bigger?
var numOne = 6;
var numTwo = 6;
if (numOne > numTwo){
    console.log(numOne);
}else if(numOne < numTwo){
    console.log(numTwo);
}else{
    console.log("The two numbers are equal");
}

//Driving Age
var age= 6;
var legalDrivingAge = 18;
if (age < legalDrivingAge ){
console.log("Sorry, you can't drive yet");
var driveAge =legalDrivingAge - age;
console.log("Sorry, you have " + driveAge +" years to wait until you can drive");
}else {
    console.log("Drive away!");
}

//The World Translator
var word="Hello World";
word=word.toLowerCase();
var english = "hello world";
var arabic = "مرحبا بالعالم";
var french = "bonjour"
if (word === english){
console.log(english);
}else if(word === arabic){
    console.log(arabic);
}else if (word === french){
    console.log(french);
}
//Suburbs
var suburb = "Haworth";
if(suburb === "Haworth"){
    console.log("This suburb has several golf courses, seasonal farmers markets");
}else if(suburb === "Englewood"){
console.log("It's only 9 miles from downtown Manhattan");
}

//The Grade Assigner
var score = 85;
if(score >= 90){
console.log("Your score is A");
}else if(score >=80){
    console.log("Your score is B");
}else if(score >= 70){
    console.log("Your score is C");
}else if(score >=50){
    console.log("Your score is D");
}else {
    console.log("Your score is F");
}

//Air Conditioning
var desiredTemp = 50;
var currentTemp = 30;
var functionalAirconditioner=false;
if(currentTemp > desiredTemp && functionalAirconditioner){
console.log("Turn on the A/C please");
}else if(currentTemp > desiredTemp && !functionalAirconditioner){
    console.log("Fix the A/C! it's hot");
}else if(currentTemp < desiredTemp && !functionalAirconditioner){
    console.log("Fix the A/C whenever you have the chance. It's cool");
}

//Golf
var par=5;
var score=3;
if(score ===1){
console.log("Hole in one");
}else if(score <=par-2){
    console.log("Eagle");
}else if(score <par -1){
    console.log("Birdie");
}else if(score === par){
    console.log("Par");
}else if(score < par +1){
    console.log("Bogey");
}else if(score <par +2){
    console.log("Double Bogey");
}else if(score >=par+3){
    console.log("Not sure");
}

//Serge Says
var message = "";
if(message.endsWith("?")){
console.log("Sure");
}else if(message.toUpperCase() === true){
console.log("Woah, chill out");
}else if(" " || message.indexOf(' ') !== -1){
console.log("Fine. Be that way!");
}else{ 
    console.log("Whatever");
}

//The Pluralizer
var number =1;
var word="dog";
if(number > 1){
    if(word.endsWith("y")){
        var newWord=word.replace("y","ies" );
        console.log("You have " + number + newWord);
    }else{
        word+="s";
        console.log("You have " + number + word);
    }
}else{
console.log("You have " + number + word);
}

//The Rest
var rock = true;
var paper = true;
var scissors = false;
if (rock && paper || rock && scissors || paper && scissors){
console.log("WOHOO, you're the winner");
}else{
    console.log("Ops, try again");
}

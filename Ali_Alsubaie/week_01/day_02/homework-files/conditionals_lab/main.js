// What number is bigger
var numOne = 7, numTwo = 5;
if(numOne > numTwo){
    console.log(`The number ${numOne} is bigger`);
} else if(numOne < numTwo){
    console.log(`The number ${numTwo} is bigger`);
} else {
    console.log("They are equal");
}

// Driving age
var age = 26, ageOfDriving = 18;
if(age < ageOfDriving){
    console.log(`Sorry, you have ${ageOfDriving - age} years to wait until you can drive`);
} else if(age >= ageOfDriving){
    console.log("Drive away!");
} 

// World Translator
var language = "arabic".toLowerCase();
if(language === "arabic"){
    console.log("مرحباً بالعالم");
} else if(language === "english"){
    console.log("Hello World");
} else if(language === "french"){
    console.log("Wow, I don't speak French");
} else {
    console.log("What kind of language is that!");
}

// Suburbs
var suburb = "khobar".toLowerCase();
if(suburb === "riyadh"){
    console.log("Nice city, but no see close to you :P");
} else if(suburb === "khobar"){
    console.log("Wow, so humid. But at least you have a beach");
} else if(suburb === "jeddah"){
    console.log("Nice city for a vecation, with lots of things to do.");
} else {
    console.log("I don't know that");
}

// The grade assigner
var testResult = 85;
if(testResult >= 90)
    console.log("You got A");
else if(testResult >= 80)
    console.log("You got B");
else if(testResult >= 70)
    console.log("You got C");
else if(testResult >= 60)
    console.log("You got D");
else
    console.log("You FAILED F");


// Air Conditioning
var isFunctional = false;
var currentTemp = 35;
var desiredTemp = 23;
if(isFunctional && currentTemp > desiredTemp){
    console.log("Turn on the A/C Please");
} else if(!isFunctional && currentTemp > desiredTemp){
    console.log("Fix the A/C now! It's hot!");
} else if(!isFunctional && currentTemp < desiredTemp){
    console.log("Fix the A/C whenever you have the chance .. it's cool");
}


// Golf
var score = 1, par = 3;
if(score === 1){
    console.log("Hole in one");
} else if(score <= par -2){
    console.log("Eagle");
} else if(score === par -1){
    console.log("Birdie");
} else if(score <= par){
    console.log("Par");
} else if(score === par +1){
    console.log("Bogey");
} else if(score === par +2){
    console.log("Double Bogey");
} else if(score >= par -2){
    console.log("Not sure");
}


// Serge Says
var message = "";
if(message.endsWith("?")){
    console.log("Sure");
} else if(message === message.toUpperCase()){
    console.log("Woah, chill out!");
} else if(message === ""){
    console.log("Fine");
} else {
    console.log("Whatever");
} 


// The Pulralizer


// Rock Paper Scissors
var playerChoice = "Rock".toLowerCase();
var opponentChoice = "Scissors".toLowerCase();

if ((playerChoice === "rock" && opponentChoice === "rock") || 
    (playerChoice === "paper" && opponentChoice === "paper") ||
    (playerChoice === "scissors" && opponentChoice === "scissors")){
    console.log("Tie")
} else if((playerChoice === "rock" && opponentChoice === "scissors") ||
    (playerChoice === "paper" && opponentChoice === "rock") ||
    (playerChoice === "scissors" && opponentChoice === "paper")){
        console.log("Player wins!");
} else {
    console.log("Opponent wins!");
}
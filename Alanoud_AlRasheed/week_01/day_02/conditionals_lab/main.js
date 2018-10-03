//What number's bigger?

var numberOne = 5;
var numberTwo = 8;

if (numberOne>numberTwo) {
    console.log(numberOne+" is bigger than "+numberTwo);
} else {
    console.log(numberTwo+" is bigger than "+numberOne);
}

//Driving Age

var userAge = 16;
var yearsLeft = 18 - userAge;

if (userAge<18) {
    console.log("Sorry, you have "+yearsLeft+" years to wait until you can drive");
} else {
    console.log("Drive away!");
}

//The World Translator

var language = "French";

if (language==="Arabic"){
    console.log("مرحبا بالعالم");
} else if (language==="English"){
    console.log("Hello World");
} else if (language==="French"){
    console.log("Bonjour le monde");
} else {
    console.log("Sorry we don't support this language yet.");
}

//Suburbs

var userSuburbs = "Alkharj";

if (userSuburbs==="Alkharj") {
    console.log("Do you enjoy farming?");
} else if (userSuburbs = "Abha") {
    console.log("How is the weather up there?");
} else {
    console.log("We'd love to visit some day.");
}

//The Grade Assigner

var score = 65;

if (score>=90){
    console.log("Your grade is A");
} else if (score>=80){
    console.log("Your grade is B");
} else if (score>=70){
    console.log("Your grade is C");
} else if (score>=60){
    console.log("Your grade is D");
} else {
    console.log("Your grade is F");
}

//Air Conditioning

var currentTemp = 5;
var isACFunctional = false;
var desiredTemp = 20;

if (isACFunctional && currentTemp>desiredTemp){
    console.log("Turn on the A/C Please");
} else if (!isACFunctional && currentTemp>desiredTemp){
    console.log("Fix the A/C now! It's hot!");
} else if (!isACFunctional && currentTemp<desiredTemp){
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}

//Golf

var golfScore = 2;
var par = 5;

if (golfScore===1){
    console.log("Hole in one");
} else if(golfScore<=par - 2){
    console.log("Eagle");
} else if(golfScore===par - 1){
    console.log("Birdie");
} else if(golfScore===par){
    console.log("Par");
} else if(golfScore===par + 1){
    console.log("Bogey");
} else if(golfScore===par + 2){
    console.log("Double Bogey");
} else if(golfScore>=par + 3){
    console.log("Not sure");
}

//Serge Says

var userMessage = "     ";
var upperCaseMsg = userMessage.toUpperCase();

if(userMessage.endsWith("?")){
    console.log("Sure");
} else if(userMessage.trim()===""){
        console.log("Fine. Be that way!");
} else if(userMessage===upperCaseMsg){
    console.log("Woah, chill out!");
} else {
    console.log("Whatever");
}

//The Pluralizer

var word = "life";
var lastTwoLetters = word.slice(-2);

if (word.endsWith("s") || word.endsWith("ch") || word.endsWith("x") || word.endsWith("z") || word.endsWith("sh")){
    console.log(word+"es");
} else if (word.endsWith("y") && lastTwoLetters!=="ay" && lastTwoLetters!=="ey" && lastTwoLetters!=="iy" && lastTwoLetters!=="uy" && lastTwoLetters!=="oy"){
    console.log(word.slice(0,-1)+"ies");
} else if (word.endsWith("f")) {
    console.log(word.slice(0,-1)+"ves");
} else if (lastTwoLetters==="fe") {
    console.log(word.slice(0,-2)+"ves");
} else {
    console.log(word+"s");
}

//Rock, Paper, Scissors

var playerOne = "Paper";
var playerTwo = "Scissors";

if (playerOne==="Rock" && playerTwo==="Scissors" || playerOne==="Scissors" && playerTwo==="Paper" || playerOne==="Paper" && playerTwo==="Rock" ){
    console.log("Player one wins!");
} else if (playerOne==="Rock" && playerTwo==="Paper" || playerOne==="Paper" && playerTwo==="Scissors" || playerOne==="Scissors" && playerTwo==="Rock"){
    console.log("Player two wins!");
} else if (playerOne==="Rock" && playerTwo==="Rock" || playerOne==="Scissors" && playerTwo==="Scissors" || playerOne==="Paper" && playerTwo==="Paper"){
    console.log("It's a tie!");
}
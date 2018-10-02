//Write an if statement that tests two number (numOne and numTwo), and prints the biggest number
var numOne = 20;
var numTwo = 30;

if (numOne > numTwo){
    console.log("First number "  + numOne + " bigger than Second number" + numTwo);
}else if (numOne < numTwo){
    console.log("Second number " + numTwo + " bigger than First number" + numOne);
}else {
    console.log("First number "  + numOne + " eqaul to Second number" + numTwo);
}


//Driving Age
    /* Store the user age
    If age is less than 18, print "Sorry, you can't drive yet"
    If the age is equal to or over 18, print "Drive away!"
    Bonus: If the user can't drive yet, 
    tell them how many years they will have to wait. 
    E.g. "Sorry, you have 4 years to wait until you can drive" */

var ageUser = 10;

if(ageUser < 18){
    console.log("Sorry, you can't drive yet");
    var remainerYearDrive = 18 - ageUser;
    console.log("Sorry, you have " + remainerYearDrive +" years to wait until you can drive")
}else {
    console.log("Drive away!");
}



//The World Translator
    /*Write an if statement that writes Hello World in different languages (i.e. if the language is English,
        print "Hello World", if the language is Arabic write something"مرحبا بالعالم",
        if the language is French write something romantic)*/
var lang = "spanish";
lang = lang.toLowerCase();
if(lang === "english"){
    console.log("hello world");
}else if (lang === "arabic"){
    console.log("مرحبا بالعالم");
}else if (lang === "spanish"){
    console.log("Hola");
}else {
    console.log("Sorry, We don't translate this " + lang + " language");
}


//Suburbs
    /*
    Create a program that stores a user's suburb.
    Depending on the answer, print an appropriate response of your choosing 
     (e.g. maybe what team they might support,
      what activities the user might engage in etc.)
    */
var suburb = "Riyadh";
var appro = "";
if(suburb === "riyadh"){
    appro = "Halla";
}else if (suburb === "Qassim"){
    appro = "Altawn";
}else if (suburb === "Jeddah"){
    appro = "Alatehad";
}else{

}

        //////////// ??????? ///////




//The Grade Assigner
    /*
     Write an if statement that gives users a score (A, B, C, D, or F) based on the test results
    */

var result = 83;

if(result >= 90 && result <= 100){
    console.log("the result : A");
} else if(result >= 80 && result <= 89){
    console.log("the result : B");
} else if(result >= 70 && result <= 79){
    console.log("the result : C");
} else if(result >= 60 && result <= 69){
    console.log("the result : D");
} else if(result >= 0 && result <= 59){
    console.log("the result : F");
} else {
    console.log("Sorry, The result invalid");
}


//Air Conditioning
    /*
    Store the current temperature, whether the A/C is functional, and what the desired temperature is.
    If the airconditioner is functional and the current temperature is above the the desired temperature... print "Turn on the A/C Please"
    If the airconditioner is non-functional and the current temperature is above the the desired temperature... print "Fix the A/C now! It's hot!"
    If the airconditioner is non-functional and the current temperature is below the the desired temperature... print "Fix the A/C whenever you have the chance... It's cool..."
    */

var CurrentTemperature = 22;
var desiredTemperature  = 12;
var powerAirconditioner = true;

if(powerAirconditioner && CurrentTemperature > desiredTemperature){
    console.log("Turn on the A/C Please");
}else if(!powerAirconditioner && CurrentTemperature > desiredTemperature){
    console.log("Fix the A/C now! It's hot!");
} else if(!powerAirconditioner && CurrentTemperature < desiredTemperature){
    console.log("Fix the A/C whenever you have the chance... It's cool...");
} else {
    console.log("All right");
}


//Golf
   //Write an if statement that gives a user the nickname of their score, based on par.

var score = 2;
var par = 1;

if(score === 1){
    console.log("Hole in one");
}else if(score <= par - 2){
    console.log("Eagle");
}else if(score === par - 1){
    console.log("Birdie");
}else if(score === par){
    console.log("Par");
}else if(score === par + 1){
    console.log("Bogey");
}else if(score === par + 2){
    console.log("Double Bogey");
}else if(score >= par + 3){
    console.log("Not sure");
}else{
    console.log("score is invalid");
}


//Serge Says
 /*
 Store a user message

Print 'Sure.' if you ask a question (e.g. the message ends in ?).

Print 'Woah, chill out!' if you yell (e.g. your message is in all capitals).

Print 'Fine. Be that way!' if you don't say anything (e.g. your message is empty).

Print 'Whatever.' to anything else.

Bonus: If the message is all spaces, also print "Fine. Be that way!"
*/

var message = "";
if(message.endsWith('?') && message.length > 0){
    console.log("Sure.");
}else if(message === message.toLocaleUpperCase() &&  message.trim().length > 0){
    console.log("Woah, chill out!");
}else if(!message || message.trim().length === 0){
    console.log("Fine. Be that way!'");
}else{
    console.log("Whatever.");
}


// The Pluralizer
    
var numbers = 2;
var noun = "dog";
if(numbers > 1){
    noun += "s";
    console.log(noun);
}else if(numbers === 1){
    console.log(noun);
}else {
    console.log("I can't guess is single or not ");
}





// The Rest
var playerOneMove = "rock";
var playerTwoMove = "paper";
var win = null;

if(playerOneMove === "rock"){
    if(playerTwoMove === "paper"){
        win = 2;
    }else if(playerTwoMove === "scissors"){
        win = 1;
    }
}else if(playerOneMove === "paper"){
    if(playerTwoMove === "rock"){
        win = 1;
    }else if(playerTwoMove === "scissors"){
        win = 2;
    }
}else if(playerOneMove === "scissors"){
    if(playerTwoMove === "paper"){
        win = 1;
    }else if(playerTwoMove === "rock"){
        win = 2;
    }
}
console.log("The winner player " + win );




//warm up
    var num0 = 1755;
    var meg = "";
    if(num0 % 3 === 0 ){
     meg += "Pling";
    }if(num0 % 5 === 0 ){
        meg += "Plang";
    }if(num0 % 7 === 0 ){
        meg += "Plong";
    }if(!(num0 % 3 == 0 || num0 % 5 == 0 || num0 % 7 == 0)){
    console.log(num0.toString());
    }

    console.log(meg);
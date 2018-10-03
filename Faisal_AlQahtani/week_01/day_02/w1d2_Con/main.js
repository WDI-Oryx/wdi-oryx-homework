// Homework Conditionals
console.log("Hey!");
// What number's bigger?
// Write an if statement that tests two numbers (numOne and numTwo).
// print the biggest number.

console.log("-What number's bigger?");

var numOne = 456 ;
var numTwo = 3432;
if ( numOne > numTwo ){
console.log(numOne+" is bigger than "+numTwo+".");
} else{
    console.log(numOne+" is smaller than "+numTwo+".");
}

// /////////////////////////////////////////

// Driving Age
// Store the user age
// If age is less than 18, print "Sorry, you can't drive yet"
// If the age is equal to or over 18, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"

console.log("-Driving Age");

var userAge = 5;
var waitAge = 18 - userAge;
if (userAge < 18){
    console.log("Sorry, you have "+waitAge+" years to wait until you can drive.");
} else{
    console.log("Drive away!");
}

// //////////////////////////////////////////

// The World Translator
// Write an if statement that writes Hello World in different languages (i.e. if the language is English, print "Hello World"
// the language is Arabic write something"مرحبا بالعالم". 
// the language is French write something romantic.


console.log("-The World Translator");

var language = "arabic";

if (language == "english"){
    console.log("Hello World!");
} else if (language == "arabic"){
    console.log("مرحبا بالعالم");
} else if (language == "french"){
    console.log("Tu as de beaux yeux");
}

// ////////////////////////////////////////////


// Suburbs
// Create a program that stores a user's suburb.
// Depending on the answer, print an appropriate response of your choosing 
// (e.g. maybe what team they might support, what activities the user might engage in etc.)


console.log("-Suburb");

var khobar = "Khobar";

if (khobar === "Riyadh"){
    console.log("It's the capital city");
}else if (khobar ==="Jeddah"){
    console.log("They have some great soccer teams");
}else if (khobar === "Khobar"){
    console.log("They have a beach and the best people<3.");
}

// //////////////////khobar///////////////////////////        
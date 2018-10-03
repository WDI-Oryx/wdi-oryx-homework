//what number's bigger?
var numOne = 1;
var numTwo = 10;

if(numOne > numTwo){
    console.log(numOne);
}else{
	console.log(numTwo);
}
  

//Driving Age 

var age = 12;

if(age < 18){
    console.log("Sorry, you can't drive yet");
	var remainigYears = 18 - age;
	console.log("Sorry, you have " + remainigYears + " years to wait until you can drive");
}
else if(age >= 18){
	console.log("Drive away!");
}


//The World Translator

var lang = "arabic";

if (lang === "english"){
	console.log("Hello World");
}else if (lang === "arabic"){
	console.log("مرحبا بالعالم");
}else if(lang === "french"){
	console.log("l'amour");
}


// Suburbs

var testResult = 90;

if( testResult >= 90){
	console.log("A");
}else if( testResult >= 80){
	console.log("B");
}else if( testResult >= 70){
	console.log("C");
}else if( testResult >= 60){
	console.log("D");
}else {
	console.log("F");
}


// Air Conditioning

var currentTemp = 40;
var acFunctional = false;
var desiredTemp = 30;

if(acFunctional && currentTemp > desiredTemp){
	console.log("Turn on the A/C Please");
} else if(! acFunctional){
	if(currentTemp > desiredTemp){
	console.log("Fix the A/C now! It's hot!");
} else if(currentTemp < desiredTemp){
	console.log("Fix the A/C whenever you have the chance... It's cool...");
}
}


//Golf

var score = 2;
var par = 4;
var nickname = "";

if (score === 1){
	nickname = "Hole in one";
	console.log(nickname);
} else if (score <= par-2){
	nickname = "Eagle";
	console.log(nickname);
} else if (score === par-1){
	nickname = "Birdie";
	console.log(nickname);
} else if (score === par){
	nickname = "Par";
	console.log(nickname);
} else if (score === par+1){
	nickname = "Bogey";
	console.log(nickname);
} else if (score === par+2){
	nickname = "Double Bogey";
	console.log(nickname);
} else if (score === par+3){
	nickname = "Not sure";
	console.log(nickname);
}

//Serge Says

var message = "   ";

//import isUpperCase from 'is-upper-case';

if(message.endsWith("?")){
	console.log("Sure");
} //else if (){
	//console.log("Waoh, chill out!");} 
else if (message.length === 0 || /^\s*$/.test(message)){
	console.log("Fine. Be that way!");
} else {
	console.log("Whatever");
}

//The pluralizer

//The Rest
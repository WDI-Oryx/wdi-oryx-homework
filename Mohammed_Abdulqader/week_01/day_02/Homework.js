//The Fortune Teller
var numberOfChildren = "four" ;
var partnersName = "samr";
var geographicLocation = "Yanbu";
var jobTitle = "manager";
console.log("You will be a" + jobTitle + " in " + geographicLocation+ ", and married to " + partnersName+ " with " + numberOfChildren + " kids.");
// The Age Calculator
var currentYear = 2018; 
var birthYear = 1990 && 1995;
var age = currentYear - birthYear; 

console.log("They are either" +age +"or" +age - 1 );

//The Lifetime Supply Calculator

var currentAge = 26;
var maximumAge = 110;
var numperDay = 20;
var totalNeeded = (numperDay * 365) * (maximumAge - currentAge);
var message = "you will need" + totalNeeded + "cups of tea to last you untill the ripe old age of " + maximumAge ;
console.log("message");

//The Geometrizer

var r = 3;
var circumference = Math.PI * 2 * r;
console.log("the circumference is " + circumference);
var area = Math.PI * r * r;
console.log("the area is " +area);

//








//Exercises: if/else if/else statements
// What number's bigger?
var numOne = 5;
var numtow =9;
if (numOne > numtow){
    console.log(" is " +numOne);
}else {
    console.log("is " +numtow);
}
// Driving Age
var drivingAge = 2;
var ageForDriven= 18 ;
var still = (18 - drivingAge);
if (drivingAge >= 18 ){
console.log("Drive away");
}else{
console.log(" sorry you can't drive yet  " + still +" years" );
}

//The World Translator

var english = "Hello Word" ; 
var arabic =  "مرحبا بالعالم " ;
var France =  "Bienvenue dans le monde" ;
if (  english ){
    console.log(+english);
}else if( arabic){
    consol.log(+ arabic);

}else{
    console.log(France);
}
//Suburbs

var suburb = "y" || "x" ;
if ("y"){
    console.log(" tem alittihad activity swimming");
}else if ("x"){
    console.log(" tem alhlal activity running");
}
var Score = 82 ;
if (Score >= 90){
    console.log("A");
}else if(Score >= 80 ){

    console.log("B");
}
else if(Score >= 70 ){

    console.log("C");
}
 else if(Score >= 60 ){

    console.log("D");
}else {

    console.log("F" );
}
//Air Conditioning
var teperature = 30;
var airconditioner = 1;
var functional = true;
desierdTemperature =20;
if (airconditioner = "functional"  &&  currentTemperature > desierdTemperature ){
console.log("Fix the A/C now! its hot");

}else (airconditioner = !"functional" && currentTemperature < desierdTemperature) {
console.log( "Fix the A/C whenever you have the chance... It's cool...")
}

//Golf
var Scored = 1;
if (Scored === 1){
    consoe.log("Hole in one" );
}else if(Scored <=par -2){
    consol.log("Eagle");
}else if(Scored ===par-1){
    consol.log("Birdie");
}else if(Scored === par){
    consol.log("par");
}else if(Scored === par+1){
    consol.log("Bogey");
}else if(Scored === par +2 ){
    consol.log("Double Bogey");
}else if(Scored >= par +3){
    consol.log("Not sure");
}
//
var userMessage = "Hello world, welcome?";
if (str.endsWith "?"){}
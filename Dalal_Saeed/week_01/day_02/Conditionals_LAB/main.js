//What number's bigger?
var numOne = 5;
var numTow = 7;
if (numOne > numTow){
    console.log("bigger number is: "+ numOne);
}
else if (numTow > numOne){
    console.log("bigger number is: "+ numTow);
}
else{
    console.log("numbers are equals");
}

//Driving Age
var userAge ;

if (userAge < 18 ){
    console.log("Sorry, you have "+ (18- userAge) +" years to wait until you can drive");
} 
else {
    console.log("Drive away!");
}

//The World Translator
var language = "English";
if(language === "English"){
    console.log("Hello World!");
}
else if (language === "Arabic"){
    console.log("مرحبا بالعالم !");
}
else if (language === "Frensh"){
    console.log("مرحبا بالعالم !");
}


//Suburbs
userSuburb = "Jeddah" ;
favTeam = "Itehad";

if (userSuburb = "Jeddah" ){
    favTeam = "Itehad"
}
else if (userSuburb = "Riyadh" ){
    favTeam = "Helal"
}
else if (userSuburb = "Makkah" ){
    favTeam = "Wehda"
}
console.log("User lives in "+ userSuburb +"his favarite team is "+ favTeam);


//The Grade Assigner
var userGrade = 90;
if(userGrade >= 90){
    "You Got an A"
}
if(userGrade >= 80){
    "You Got an B"
}
if(userGrade >= 70){
    "You Got an C"
}
if(userGrade >= 60){
    "You Got an D"
}
if(userGrade < 60){
    "You Got an F"
}


//Air Conditioning
var currentTemperature = 20;
var ACFunctional=true;
var desiredTemperature=21;

if (ACFunctional && currentTemperature > desiredTemperature){
    console.log("Turn on A/C please!");
}
if (!ACFunctional && currentTemperature > desiredTemperature){
    console.log("Fix the A/C now! It's hot!");
}
if (!ACFunctional && currentTemperature < desiredTemperature){
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}

//Golf
var score = 1;
var par = 0;
if (score === 1){
    console.log("Hole in one");
}
if (score <= par - 2){
    console.log("Eagle");
}
if (score === par-1){
    console.log("Birdie");
}

if (score === par ){
    console.log("Par");
}
if (score === par+1){
    console.log("Bogey");
}
if (score === par+2){
    console.log("Double Bogey");
}
if (score >= par + 3){
    console.log("Not Sure");
}


//Serge Says
var message = "Hello" ;
if (message.endsWith("?")){
    console.log("Sure.");
}
else if (message === message.toUpperCase) {
    console.log("Woah, chill out!");
}
else if (message === "" || message === " "){
    console.log("Fine. Be that way!");
}
else {
    console.log("Whatever.");
}

//The Pluralizer
var num = 20;
var noun = "day";
if (num === 1){
    console.log("You have "+ num +" "+ noun );
}
else if (num > 1 ){
    if (noun.endsWith("s")||noun.endsWith("x")|| noun.endsWith("z")||noun.endsWith("ch")||noun.endsWith("sh")){
    console.log("You have "+ num +" "+noun+"es");}
    else if (noun.endsWith("y")||noun.endsWith("y")||noun.endsWith("y")||noun.endsWith("y")){
        if (noun.endsWith("ay")||noun.endsWith("ey")||noun.endsWith("oy")||noun.endsWith("iy")){
        console.log("You have "+ num +" "+noun+"s");}
        else {
            console.log("You have "+ num +" "+noun+"ies");}
        }
    }


//The Rest
var rock , paper, scissors;
if (rock&&paper){
    game = "paper";
    paperBest += 1;
    console.log("Paper beats Rock!");
    if (paperBest === 3){
        console.log("Paper won 3 times");
    }
    
}
else if (rock&&scissors){
    game = "rock";
    rockBest += 1;
    if (rockBest === 3){
        console.log("Rock won 3 times");
    }
}
else if (paper&&scissors){
    game="scissors";
    scissorsBest += 1;
    if (scissorsBest === 3){
        console.log("scissors won 3 times");
    }
}














//Variables.

//Age Calculator

var currentYear = 2018;
var birthYear = 1985;
var yourAge = currentYear - birthYear;



console.log("your age is" + " " +yourAge);


//The Geometrizer

var radius= 5;

var circumference = (2*3.14)*radius;
console.log("The circumference is" + " " + circumference);

//var Area = 3.14*(radius^2);
//console.log("The Area is" + " " +Area);


//The Temperature Converter

var celsiusTemperature=35;
console.log(celsiusTemperature + " °C "+  " is " + ((celsiusTemperature*1.8)+32) + " °F");


var fahrenheitTemperature= 64;

console.log(fahrenheitTemperature + " °F "+  " is  " +  (fahrenheitTemperature- 32)*.5556 + " °C ");

//Conditionals

//What number's bigger?
var numOne=10;
var numTwo=22;

if (numOne>numTwo){

console.log("Biggest number is " + numOne);

}
else{
    console.log("Biggest number is " + numTwo);
}

//Driving Age

var userAge= 10;

if(userAge<18){
    console.log("Sorry, you can't drive yet, you have "+ (18-userAge) +" years to wait until you can drive");
    
}
else if (userAge>=18){
    console.log("Drive away!");
}

//The Grade Assigner

var testResult= 50;

if (testResult >=90) {

    console.log("Your Grade is 'A' Great Job!");
}
else if(testResult >=80 ){

    console.log("Your Grade is 'B' Exellent!");
}
else if(testResult >=70){
    console.log("Your Grade is 'C' Good!");
}
else if(testResult >= 60){

    console.log("Your Grade is 'D' Try Harder!");
}
else{
    console.log("Your Grade is 'F' ");
}
//Air Conditioning

var currentTemp=20;
var acFunctional= true;
var desiredTemp=16;

if (acFunctional==true&&currentTemp>desiredTemp){

    console.log("Turn on the A/C Please");
}
else if(acFunctional!=true&&currentTemp>desiredTemp){
    console.log("Fix the A/C now! It's hot!");
}
else if(acFunctional!=true&&currentTemp<desiredTemp){

    console.log("Fix the A/C whenever you have the chance... It's cool..");
}

//Serge Says
var message = "HEY";

if(message.endsWith("?")){

    console.log("Sure.");
}
//else if (message.uppercase()){
  //  console.log("Woah, chill out!");

//}
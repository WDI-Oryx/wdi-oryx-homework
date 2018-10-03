//The Fortune Teller

var numberOfChildren = 0 ;
var partnerName = "Adam";
var geoLocation = "Tokyo";
var jobTitle = "author";

console.log("You will be an "+jobTitle+" in "+geoLocation+", and married to "+partnerName+" with "+numberOfChildren+" kids.");

//The Age Calculator 

var currentYear = 2018;
var birthYear = 1994;

var possibleAge = currentYear - birthYear;
var anotherPossibleAge = possibleAge - 1;

console.log("They are either "+possibleAge+" or "+anotherPossibleAge+".");

//The Lifetime Supply Calculator

var currentAge = 24;
var maxAge = 100;
var amountPerDay = 3;

var totalAmountConsumed = (maxAge - currentAge) * (amountPerDay * 365);

console.log("You will need "+totalAmountConsumed+" to last you until the ripe old age of "+maxAge);

//The Geometrizer

var radius = 3;
var circumference = (2 * 3.14) * radius;
var area = 3.14 * (radius * radius);

console.log("The circumference is "+circumference);
console.log("The area is "+area);

//The Temperature Converter

var celsiusTemp = 3;
var fahrenheitTemp = 5;

var convertedCelsius = (fahrenheitTemp -32 ) * ( 5/9);
var convertedFahrenheit = celsiusTemp * (9/5) + 32;

console.log(celsiusTemp+"°C is "+convertedFahrenheit+"°F.");
console.log(fahrenheitTemp+"°F is "+convertedCelsius+"°C.");
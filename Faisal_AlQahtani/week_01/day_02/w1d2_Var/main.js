//The Fortune Teller
//variables: number of children, partner's name, geographic location, job title. 
//Output: "You will be a X in Y, and married to Z with N kids".
console.log("-The Fortune Teller");
var numberOfChildren = 4;
var partnersName = "Someone";
var geographicLocation = "Riyadh";
var jobTitle = "CEO";

console.log("You will be a " + jobTitle + " in " + geographicLocation + " , and married to " + partnersName + " with " + numberOfChildren+ " kids.  ");

// ////////////////////////////////

// The Age Calculator
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output: "They are either NN or NN", substituting the values.
console.log("-The Age Calculator");
var currentYear = 2018;
var birthYear = 1958;
var age = currentYear - birthYear;
if (age){
    console.log("Your age is " + age +".");
}

// //////////////////////////////////

// The Lifetime Supply Calculator.
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the current year using JavaScript!
console.log("-The Lifetime Supply Calculator.");
var snack = "Cheetos";
var currentAge = 33;
var maxAge = 66;
var perDay = 3;
var eat = (maxAge - currentAge) * perDay;
var currentYearbk;


console.log("You will need " + eat + " to last you until the ripe old age of " + snack + ".");


// //////////////////////////////////////////

// The Geometrizer
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output: "The circumference is NN".
// Calculate the area based on the radius, and output: "The area is NN".
console.log("-The Geometrizer");
var radius = 2;
var pie = 3.14;
var circumference = 2 * pie * radius;
console.log("The circumference is " + circumference+".");
var area = pie * radius * radius;  
console.log("The area is " + area +" pie.");

// /////////////////////////////////////////////

// The Temperature Converter
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output: "NN°F is NN°C."
console.log("-The Temperature Converter");
var celsius = 60;
var converterCToF = (celsius * 9/5 +32);
console.log(celsius + "'C is " + converterCToF + "'F."); 
var fahrenheit = 100    ;
var converterFToC = (fahrenheit - 32) * 5/9;
console.log(fahrenheit+"'F is "+ converterFToC + "'C.");

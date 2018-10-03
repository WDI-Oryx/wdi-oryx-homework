//The Fortune Teller
console.log(" == The Fortune Teller ==");
var numOfChild = 5;
var partner = "Sara";
var geographic = "Dammam";
var job = "Manager of IT department";

console.log("You will be a " + job + "in " + geographic + ", and married to " + partner + "with " + numOfChild + "kids.");

// The Age Calculator
console.log("\n == The Age Calculator ==")
var year = 2018;
var birthYear = 1994;


var calculate1 = ( year - birthYear );
var calculate2 = ( year - birthYear + 1 );

console.log("They are either " + calculate1 + " or " + calculate2 );


// The lifetime supply calculator
console.log("\n == The Lifetime Supply Calculator ==") 
var age = prompt("what is your current age?");
var maxAge = 100;
var amount = 10;

var calculate = (amount * 365) * ( maxAge - age );
console.log("You will need " + calculate +" to last you until the ripe old age of " + maxAge);

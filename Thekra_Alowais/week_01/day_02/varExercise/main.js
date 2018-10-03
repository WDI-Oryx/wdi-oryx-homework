//The Fortune Teller
var numOfChildren = 5;
var name = "Abdullah";
var geLocation = "Riyadh";
var jobTitle = "QC";
console.log("You will be a " + jobTitle + " in " + geLocation + " and married to " + name + " with " + numOfChildren + " kids");

//The Age Calculator
var currentYear=new Date();
var year = currentYear.getFullYear();
var birthday=1994;
var age = year - birthday;
console.log("Your age is " + age);

//The Lifetime Supply Calculator
var age = 24;
var maxAge = 40;
var amount = 3;
var total = (amount * 30 )*12;
total = total * (maxAge - age);
console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);

//The Geometrizer


//The Temperature Converter
var cTemp = 30;
var fTemp = 50;
//convert F to C
var formulaOne = (fTemp - 32) * .5556;
console.log(formulaOne.toFixed(0)+"C");
//convert C to F
var formulaTwo = cTemp*1.8 + 32;
console.log(formulaTwo.toFixed(0)+"F");
//Homework 
//What number's bigger?

var numOne = 56;
var numTwo = 77;
console.log("Number 1 :" + numOne);
console.log("Number 2 :" + numTwo);
if (numOne > numTwo)
{
    console.log("Number " + numOne + " is greater than " +numTwo);
}
else if (numOne < numTwo)
{
    console.log("Number " + numTwo + " is grater than " +numOne);
}
else 
{
    console.log(numTwo + " = " +numOne);
}

//--------------
//Driving Age

var userAge = 16;
var legalAge = 18;

if (userAge >= legalAge)
{
    console.log("Drive away!");
}
else 
{
    console.log("Sorry, you can't drive yet");
    console.log("Sorry, you have " + (legalAge - userAge) + " years to wait until you can drive")
}

//---------------

//The World Translator

var lang = "English";

if (lang === "English")
{
    console.log("Hello World");
}
else if (lang === "Arabic")
{
    console.log("مرحبا بالعالم");
}
else 
{
    console.log("Hello World in your language");
}

//------------
//Suburbs
var suburb1 = "AL-hasa" ;
var suburb2 = "Riyadh";

if (suburb1 === "AL-hasa")
{
    console.log("because of the team I support");
}
else 
{
    console.log("because It's the capital");
}

//-------
//The Grade Assigner
var grade = 88;

if (grade <= 100 && grade >=90)
{
    console.log("A");
}
else if (grade < 90 && grade >=80)
{
    console.log("B");
}
else if (grade < 80 && grade >=70)
{
    console.log("C");
}
else if (grade < 70 && grade >=60)
{
    console.log("D");
}
else if (grade < 60 && grade >=0)
{
    console.log("F");
}
else
{
    console.log("Wrong greade");
}

//--------------
//Air Conditioning

var currentTem = 35;
var functional = true;
var desiredtemp = 24;

if (currentTem > desiredtemp &&  functional)
{
    console.log("Turn on the A/C Please.");
}
else if (currentTem > desiredtemp &&  !functional)
{
    console.log("Fix the A/C now! It's hot!");
}
else if (currentTem < desiredtemp &&  !functional)
{
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}
else 
{
    console.log("notheing");
}

//-------------
//Golf

var par = 4;

if (par === 1)
{
    console.log("Hole in one");
}
else if (par <= par - 2)
{
    console.log("Eagle");
}
else if (par === par - 2)
{
    console.log("Birdie");
}
else if (par === par)
{
    console.log("Par");
}
else if (par === par + 1)
{
    console.log("Bogey");
}
else if (par === par + 2)
{
    console.log("Double Bogey");
}
else if (par >= par + 3)
{
    console.log("Not sure");
}
else 
{
    console.log("notheing");
}
//---------------
//Serge Says

var userMessage = "?";

if (userMessage.endsWith("?"))
{
    console.log("Sure");
}
else if (userMessage === userMessage.toLocaleUpperCase())
{
    console.log("Woah, chill out");
}
else if (userMessage === 0)
{
    console.log("Fine. Be that way!");
}
else 
{
    console.log("Fine. Be that way!");
}
//------------
//Variables and Primitive Data Types

//The Fortune Teller
 var childrenNum = 5;
 var partnerName = "Abdullah and Aminah";
 var locationss = "Alhasa";
 var jobTittle = "Programmer";

 console.log("You will be a " +  jobTittle + "in " + locationss + ", and married to " + partnerName + " with " + childrenNum + " kids.");

 //------------------
 //The Age Calculator

 var CurrentYear = 2018;
 var birthYear = 1994;

 var age = CurrentYear - birthYear;

 console.log("Your Age is : " + age);

 //------------------
 //The Lifetime Supply Calculator 
 var currAge = 25;
 var maxAge = 80;
 var amount = 4;
 
 var total = (maxAge - currAge) * amount;

 console.log("You will need " + total +" to last you until the ripe old age of " + (maxAge - currAge) );

 //-----------
// The Geometrizer
 var radius = 5;

 var circumference = 2 * 3.14 * radius; 
 console.log("The area is " + circumference);
console.log("== Driving Age ==")
function drivingAge (userAge) {
    var canDrive = 18;
    if(userAge >= canDrive) {
        console.log("Drive away!");
    } else {
    console.log("Sorry, you have " + (canDrive - userAge) + " years to wait until you can drive");
    }
}
drivingAge("16");

// The Translator
console.log("\n== The translator ==")
function translator(lang) {
    var english = "Hello World";
    var french = "Bonjour le Monde";
    var arabic = "مرحبا بالعالم";

    if (lang === "english") {
        console.log(english);
    } if (lang === "frensh") {
        console.log(french);
    } if (lang === "arabic") {
        console.log(arabic);
    }
}

var lang = prompt("Please enter which language do you want to disply it ( english - french - arabic ) ?");
translator(lang);

//The Fortune Teller
console.log("\n == The Fortune Teller ==");
function tellFortune(numOfChild,partner,geographic,job) {

    console.log("You will be a " + job + " in " + geographic + ", and married to " + partner + " with " + numOfChild + " kids.");

}
tellFortune("7","Sarah","Khobar","Manager of IT");
tellFortune("5","Waffa","Dammam","IT Support");
tellFortune("3","Jawaher","Dhahran","system Administration");


// The Age Calculator
console.log("\n == The Age Calculator ==")
function ageCalculator (birthYear) {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var calculate1 = ( year - birthYear );
    var calculate2 = ( year - birthYear + 1 );
    console.log("They are either " + calculate1 + " or " + calculate2 );
}
var birthYear = prompt("Please enter your birth year:");
ageCalculator(birthYear);

// The lifetime supply calculator
console.log("\n == The Lifetime Supply Calculator ==") 
function calculateSupply (age,amount) {
var maxAge = 100;
var calculate = (amount * 365) * ( maxAge - age );

console.log("You will need " + calculate +" to last you until the ripe old age of " + maxAge);
}

calculateSupply("20","3");
calculateSupply("25","6");
calculateSupply("30","9");




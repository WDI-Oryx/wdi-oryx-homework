// Driving Age
function canDrive(userAge){
    if(userAge < 18){
        console.log("Sorry, you have " + (18 - userAge) + " year to wait until you can drive");
    } else {
        console.log("Drive Away!");
    }
}
canDrive(17);


// World Translator
function translator (lang){
    lang = lang.toLowerCase();
    var translations = {
        english: "Hello World",
        french: "Bonjour le Monde",
        arabic: "مرحباً بالعالم"
    }
    if(lang === "eng"){
        console.log(translations.english)
    } else if(lang === "fr"){
        console.log(translations.french)
    } else if(lang === "ar"){
        console.log(translations.arabic)
    } else {
        console.log("Unknown Language");
    }
}
translator("AR");


// The Fortune Teller
function tellFortune(numOfChildren, partnerName, geoLocation, jobTitle){
    console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`);
}
tellFortune(5, "Judy", "London", "Finance Manager");
tellFortune(2, "Mary", "Parice", "Full-Stack Developer");
tellFortune(1, "Eman", "Saudi Arabia", "Instructor");



// Age calculator
function calculateAge(birthYear){
    var currentYear = (new Date).getFullYear();
    var possibleAge = currentYear - birthYear;
    console.log(`They are either ${possibleAge} or ${possibleAge+1}`);
}
calculateAge(1992);


// The Lifetime supply calculator
function calculateSupply(age, amntPerDay){
    const maxAge = 80;
    var total = (maxAge - age) * (amntPerDay * 360);
    var display = `You will need ${total} to last you until the ripe old age of ${maxAge}`;
    console.log(display);
}
calculateSupply(26, 5);


// The Geometrizer
function calcCircumference(r){
    var circumference = 2 * Math.PI * r;
    console.log(`The circumference is ${circumference}`)
}
function calcArea(r){
    var area = Math.PI * Math.pow(r,2);
    console.log(`The area is ${area}`)
}
calcCircumference(5);
calcArea(5);

// The Temprature Converter
function celsiusToFahrenheit(c){
    var fahrenheitCalc = celsius * (9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheitCalc}°F`);
}
function fahrenheitToCelsius(f){
    var celsiusCalc = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F is ${celsiusCalc}°C`);
}
var celsius = 35;
var fahrenheit = 77;
celsiusToFahrenheit(celsius);
fahrenheitToCelsius(fahrenheit);


// Grade Assigner
function assignGrade(score){
    if(score >= 90)
        console.log("A");
    else if(score >= 80)
        console.log("B");
    else if(score >= 70)
        console.log("C");
    else if(score >= 60)
        console.log("D")
    else
        console.log("F");
}
assignGrade(87);
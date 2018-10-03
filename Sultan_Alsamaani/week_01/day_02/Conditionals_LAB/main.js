var userAge=30;
if (userAge <18) {
    console.log("Sorry, you can't drive yet");
} else if(userAge >=18) {
    console.log("Drive away!");
}

var lang = "En";
if (lang == "En") {
    console.log("Hello World");
} else if (lang == "Ar") {
    console.log("اهلا بالعالم");
}
else if (lang == "Fr") {
    console.log("French French French");
}

var suburb="sss";
console.log("i didn`t under stand the request");

var testResult = 90;
if (testResult >=95) {
    console.log("A");
} else if (testResult >=90) {
    console.log("B");
} else if (testResult >=80) {
    console.log("C");
} else if (testResult >=60) {
    console.log("D");
} 

//ac temp

var currentTemperature = 25;
var desiredTemperature = 23;
var airconditioner_functional=true;
if (currentTemperature < desiredTemperature && airconditioner_functional ===true) {
    console.log("Turn on the A/C Please");
} else if (currentTemperature < desiredTemperature && airconditioner_functional ===false) {
    console.log("Fix the A/C now! It's hot!");
}
else if (currentTemperature > desiredTemperature && airconditioner_functional ===false) {
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}
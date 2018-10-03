var currentTemp = 20;
var acFunctional = false;
var desiredTemp = 25;

if (acFunctional && currentTemp > desiredTemp) {
    console.log("Turn on the A/C Please");
} else if (!acFunctional && currentTemp > desiredTemp) {
    console.log("Fix the A/C now! It's hot!");
} else if (!acFunctional && currentTemp < desiredTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}
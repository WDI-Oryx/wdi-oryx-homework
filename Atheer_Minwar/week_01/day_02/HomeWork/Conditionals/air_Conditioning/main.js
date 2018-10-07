var currentTemp = 24;
var acWork = true ;
var desireTemp = 17;

if (acWork && currentTemp > desireTemp) { 
    console.log("Turn on the A/C Please");
} else if (!acWork && currentTemp > desireTemp) {
    console.log("Fix the A/C now! it's hot!")
} else if (!acWork && currentTemp < desireTemp) {
    console.log("Fix the A/C whenever you can , it's cool")
}
// Planet to Earth years
var planets = {
    "earth": 1,
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132,
};

var yearInSeconds = 31557600;
var ageInSeconds = 0;

function convert(timeInSeconds, toPlanet) {
    return convertedAge = timeInSeconds / yearInSeconds * planets[toPlanet.toLowerCase()];
}

function convertAndLog(seconds) {
    for (planet in planets) {
        console.log("Your age on " + planet + " is " + convert(seconds, planet) + " years!");
    }
}

ageInSeconds = prompt("Enter age in seconds:");
convertAndLog(ageInSeconds);
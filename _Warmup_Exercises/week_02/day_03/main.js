// Planet to Earth years
var planets = {
    "Earth": 1,
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132,
};

var yearInSeconds = 31557600;
var ageInSeconds = 0;

function convert(timeInSeconds, toPlanet) {
    return convertedAge = timeInSeconds / yearInSeconds * planets[toPlanet];
}

function convertAndLog(seconds) {
    for (planet in planets) {
        console.log("Your age on " + planet + " is " + convert(seconds, planet) + " years!");
    }
}

ageInSeconds = prompt("Enter age in seconds:");
convertAndLog(ageInSeconds);
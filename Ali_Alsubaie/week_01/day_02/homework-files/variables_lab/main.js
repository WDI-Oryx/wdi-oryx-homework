// Age calculator 
var currentYear = (new Date).getFullYear(), birthYear = 1992;
var possibleAge = currentYear - birthYear;
console.log(`They are either ${possibleAge} or ${possibleAge+1}`);

// The Fortune Teller
var numOfChildren = 5,
    partnerName = "Judy",
    geoLocation = "London",
    jobTitle = "Finance Manager";

console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`);

// The Geometrizer
var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius,2);
console.log(`The circumference is ${circumference}`)
console.log(`The area is ${area}`)

// The Lifetime supply calculator
var currentAge = 26,
    maxAge = 80,
    estimatedAmount = 5;

var total = (maxAge - currentAge) * (estimatedAmount * 12);
var display = `You will need ${total} to last you until the ripe old age of ${maxAge}`;
console.log(display);
var d = new Date();
console.log(d.getFullYear());

// The Temprature Converter
var celsius = 35;
var fahrenheitCalc = celsius * (9/5) + 32;
console.log(`${celsius}°C is ${fahrenheitCalc}°F`);

var fahrenheit = 77;
var celsiusCalc = (fahrenheit - 32) * (5/9);
console.log(`${fahrenheit}°F is ${celsiusCalc}°C`);
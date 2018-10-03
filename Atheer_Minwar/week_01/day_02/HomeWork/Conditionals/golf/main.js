var par = 72 ; 
var score = 1;
if (score === 1) { 
    console.log("Your Nickname is : Hole in one")
} else if (score <= par - 2) {
    console.log("Your Nickname is : Eagle")
} else if (score === (par - 1)) {
console.log ("Your Nickname is : Birdie")
} else if (score === par) {
    console.log ("Your Nickname is : Par")
} else if (score === par +1) {
    console.log ("Your Nickname is Bogey")
} else if (score === par + 2) { 
    console.log("Your Nickname is : Double Bogey")
} else if (score >= par + 3) { 
console.log("Not sure");
} 

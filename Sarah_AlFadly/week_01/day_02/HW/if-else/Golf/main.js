var score = 7;
var par = 5;

if (score === 1) {
    console.log("Hole in one");
} else if (score <= par - 2) {
    console.log("Eagle");
} else if (score === par - 1) {
    console.log("Birdie");
} else if (score === par) {
    console.log("Par");
} else if (score === par + 1) {
    console.log("Bogey");
} else if (score === par + 2) {
    console.log("Double Bogey");
} else if (score >= par + 3) {
    console.log("Not sure");
}
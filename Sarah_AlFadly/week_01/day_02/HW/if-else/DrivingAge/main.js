var userAge = 20;

if (userAge < 18) {
    console.log("Sorry, you can't drive yet");

    var waitingYears = 18 - userAge;
    console.log("You have " + waitingYears + " years to wait until you can drive");
} else {
    console.log("Drive away!");
}
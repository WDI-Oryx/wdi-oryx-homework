/** What number is bigger?
    Write an if statement that 
    tests two number (numOne and numTwo);
    and prints the biggest number   */
var num1 = 5;
var num2 = 1;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

/** Driving Age
    Store the user age
    If age is less than 18, print "Sorry, you can't drive yet"
    If the age is equal to or over 18, print "Drive away!"
    Bonus: If the user can't drive yet, 
    tell them how many years they will have to wait. E.g. 
    "Sorry, you have 4 years to wait until you can drive"   */
var userAge = 18;
if (userAge < 18) {
    console.log("Sorry, you can't drive yet. You have", + 18 - userAge + " years to wait until you can drive");

} else if (userAge >= 18) {
    console.log("Drive away!");
}

/** The World Translator
    Write an if statement that writes Hello World in different languages 
    (i.e. if the language is English, print "Hello World", 
    if the language is Arabic write something"مرحبا بالعالم", 
    if the language is French write something romantic) */
var Arabic = false;
var English = false;
var French = false;

if (Arabic) {
    console.log("مرحبًا بالعالم");
}
else if (English) {
    console.log("Hello World");
}
else if (French) {
    console.log("Bonjour le monde");
}
else (console.log("Okay, bye"));


/*  Suburbs
    Create a program that stores a user's suburb.
    Depending on the answer, print an appropriate response of your choosing 
    (e.g. maybe what team they might support,
    what activities the user might engage in etc.) */
 var userSuburb = "Riyadh";

 if (userSuburb = "Abhaa"){
     console.log("How is the weather there? ");
 }else if (userSuburb = "Riyadh"){
     console.log("What is the population of Riyadh?");
 }else{
     console.log("Nice to meet you!");
 }
/*  The Grade Assigner
    Write an if statement that gives users a score 
    (A, B, C, D, or F) based on the test results */
var gradePercentage = 60.1;
var gradeLetter;
switch (true) {
    case (gradePercentage >= 90 && gradePercentage <= 100):
        gradeLetter = console.log("Your grade is A");
        break;
    case (gradePercentage >= 80 && gradePercentage <= 89):
        gradeLetter = console.log("Your grade is B");
        break;
    case (gradePercentage >= 70 && gradePercentage <= 79):
        gradeLetter = console.log("Your grade is C");
        break;
    case (gradePercentage >= 60 && gradePercentage <= 69):
        gradeLetter = console.log("Your grade is D");
        break;
    case (gradePercentage < 60):
        gradeLetter = console.log("Your grade is F");
        break;
    default:
        grade = "No value found";
        break;
}

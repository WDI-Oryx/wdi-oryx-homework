// Bigger Number 
numOne = 7;
numTwo = 20;
if (numOne > numTwo ){
    console.log("the bigger number is  "+ numOne);
}else {console.log("the bigger number is  "+ numTwo);}

// Driving Age
var usarAge = 7;
if (usarAge < 18) {
    var yearsToWait = 18 - usarAge ;
    console.log("Sorry you can not drive, Don't worry you will drive after  " + yearsToWait + "years");
}
else  {
    console.log("Drive away"); }


  //The World Translator
  
  var language ="عربي" ;
  if (language === "English"){
    console.log("Hello World");  
  }else if (language === "french"){
    console.log("Bonjour le monde");
  } else if (language === "عربي"){
    console.log("مرحبا بالعالم الجميل");
  } 
// Subrubs



// The Grade Assigner

var testResult = 99 ; 

if (testResult >= 90 ){
    testResult = "A";  
  }else if (testResult >= 80){
   testResult = "B";
  } else if (testResult >= 70){
    testResult = "c";
  } else if (testResult >= 60){
      testResult = "D";
  } else testResult = "F";
  console.log("you got "+ testResult);

  //Air Conditioning
  var currentTemperature = 40;
  var isACfunctional = true;
var desireTep = 30;
  if (isACfunctional && currentTemperature > desireTep ){
      console.log("Turn on the A/C Please");
  } else if (!isACfunctional && currentTemperature > desireTep ){
    console.log("Fix the A/C now! It's hot!");
  }else if (!isACfunctional && currentTemperature <= desireTep){
    console.log("Fix the A/C whenever you have the chance... It's cool..");
  }

  //Golf



// Serge Says
var userMessage = "  ";

if (userMessage.endsWith("?")){
    console.log("Sure");

} /*else if (userMessage === userMessage.toUpperCase()){
    console.log("Woah, chill out!")}*/  // this will consider all character uppercase / always gives true!
 else if(userMessage.length === 0 || userMessage.match( ) )
 {console.log("Fine. Be that way!");
} else {console.log("Whatever.");}



//The Pluralizer


//The Rest
var isRock = true;
var isPaper = true;
var isScissors = true;
if (isRock && isPaper) {console.log(isRock);}
// not completed 

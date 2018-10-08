//What number's bigger

var numOne = 20;
var numTwo = 30;
if(numOne > numTwo){

  console.log ("the biggest number is :"+" " +numOne );
}
else if(numTwo >numOne){
    console.log("the biggest number is:"+""+numTwo);
}
//Driving Age

var Age = 20;
if (Age >= 18){
    console.log("Drive away!");
}
else if(Age<18)
{
    console.log("Sorry, you can't drive yet")
    alert("Sorry, you have 4 years to wait until you can drive");
}
//The World Translator

var Language = "France";

if (Language === "English"){

console.log("Hello world");
}

else if (Language === "Arabic"){
    console.log("مرحبا بالعالم");

}
else if (Language === "France");{

console.log("Salut les mondes");
}




//The Grade Assigner

var score = 59;
if(score >= 90){
    console.log("you are take A");
} else if(score >= 80){
    console.log("you are take B");
}else if(score >= 70){
    console.log("you are take C");
} else if(score >= 60){
    console.log("you are take D");
} else {
    console.log("you are take F");
}



// Serge Says

var userMessage = " ";
if (userMessage.endsWith("?")){
    console.log("Sure");
} else if (userMessage === userMessage.toUpperCase()){
    console.log("Woah, chill out!");
} else if (userMessage === " "){
    console.log("Fine. Be that way!");
} else {
    console.log("Whatever");
}

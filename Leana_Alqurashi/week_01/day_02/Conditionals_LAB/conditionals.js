//What number's bigger?
var language = "english";
var suburb = prompt("What's your suburb?", "");
if (language === "english"){
    document.write("Hello world!"+"<br/>");}
else if (language === "french"){
    console.log("bonjour!");}
else if (language === "arabic"){
    console.log("مرحبا بالعالم");

}
else {console.log("sorry, we don't recognize the language");}

//Suburbs
if (suburb === "north"){
    document.write("you are near Jordan!");

}else if (suburb === "east"){
    document.write("you are near the sea!");

}
else {
document.write("how's it to live there?");
}

//




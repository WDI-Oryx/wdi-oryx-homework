var numOne=1;
var numTwo=2;
if(numOne>numTwo){
    console.log(numOne);}
    else if(numOne<numTwo){
        console.log(numTwo);  
    }
else{console.log("equale");}
var age=18;
var wait=0;
if(age<18){
    wait=18-age;
    console.log("Drive away! "+wait+" years to wait until you can drive"); }
    else if(age>=18){console.log("Drive away!");}
    
    lang="Arabic";
    if(lang=="English"){
        console.log("Hello World");
    }
     else if(lang=="Arabic"){console.log("مرحبا بالعالم");}
     else{console.log("french");}

     var grade=80;
     if(grade>=90){console.log("grade A")}
      else if(grade>=80){console.log("grade B");}
      else if(grade>=70){console.log("grade C");}
      else if(grade>=60){console.log("grade D");}
      else{
        console.log("You Failed F");
      }

var airconditioner=true;
var temperature=40;
if(airconditioner && temperature>25){
    console.log("Turn on the A/C Please");  
}
else if(!airconditioner && temperature>25){
    console.log("Fix the A/C now! It's hot!");
}
else if(!airconditioner && temperature<25){
    console.log("Fix the A/C whenever you have the chance... It's cool...");}
var message="HEY";
if(message.endsWith("?")){
    console.log("sure");
}
else if(message===message.toUpperCase){
    console.log("Woah, chill out!"); 
}
else if(message==" "||message==null){
    console.log("Fine. Be that way!"); 
}
else{
    console.log("Whatever");   
}

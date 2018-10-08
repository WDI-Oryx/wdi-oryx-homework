//Part 1.1

var array = [1, 2, 3, 4, 5, 6,];
        var sum = 0;
for(i=0; i < array.length; i++){
sum += array[i];
 
 }
console.log(sum);


// part 1.2
function reverseString (string){
var newString = '';
for( i = string.length -1 ; i >= 0 ; i-- ){
    newString += string[i]
}
return newString;
}
console.log(reverseString("Hi Rawan"));





var stringArray = ["Good Morning", "Is any body here?", "Thank you so much!!!", "it's will be fine"];

var stringLength = 0;

for(var i=0; i < stringArray.length; i++){
    if(stringArray[i].length > stringLength){
        var stringLength = stringArray[i].length;
    }      
} 
console.log(stringLength);






//function tellFortune(name, job, location, question){
  //  var fortunes = [
      //  "Without a doubt",
      //  "Yes!",
      //  "Probably so",
      //  "It isn't likely",
      //  "it's possible",
     //   "Absolutely",
      //  "Not a chance",
       // "Ask again",
       // "No",
       // "I doubt it",
        //"No Way"
      //];

    //  for (i=0 ; i < fortunes.length; i++){
          
  //    }
//}

//tellFortune('Lily', 'doctor', 'chicago', 'will you leave chicago?')
//console.log("The"+" "+job+','+name+','+"of"+location+','+"asks"+question);
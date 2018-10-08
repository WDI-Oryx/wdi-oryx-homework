function sumArray (array) {
 var array = [1,2,3,4];
 var result = 0; 
 for ( var i = 0 ; i < array.length ; i++) {
     result = result + array[i]; 
 }
     console.log(result);

}


sumArray();



function multiplyArray (array) {
    var array = [1,2,3,4];
    var result = 1; 
    for ( var i = 0 ; i < array.length ; i++) {
        result = result * array[i]; 
    }
        console.log(result);
   
   }
   


   multiplyArray();


   function reverseString (userString) {
       var theString = "";

   for (i = userString.length-1;  i >= 0; i--) {
     theString = theString+userString[i];
       
   }
   console.log(theString);
   }
reverseString("Hello");


function findLongestWord(word) {
    var ourArray = ["word1","word2010","word1009","word8790"];
    var longWord = 0;
    for(var i = 0; i < ourArray.length; i++){
      if(ourArray[i].length > longWord){
      longWord = ourArray[i].length;
       }
    }
    console.log (longWord);
  }
  findLongestWord();


function tellFortune (name,job,loc,ques) {
    var fortunes = [
        "Without a doubt",
        "Yes!",
        "Probably so",
        "It isn't likely",
        "it's possible",
        "Absolutely",
        "Not a chance",
        "Ask again",
        "No",
        "I doubt it",
        "No Way"
      ];
      {
        var msg = ("The " + name + ", " + job + " " + loc +
        ",  " + ques + " ... " + genratedFortune) ;
    }

    var genratedFortune = Math.random();
    genratedFortune = fortunes[genratedFortune];
}

tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?'); 

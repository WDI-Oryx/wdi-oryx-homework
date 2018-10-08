
//Part 1

//1

function sumArray(numbers) {
	var totalSum = 0;
	for (var i = 0; i < numbers.length; i++) {
		totalSum += numbers[i];
	}
	return totalSum;
}

console.log(sumArray([2,4,6,8]));


function multiplyArray(numbers) {
	var totalMultiply = 1;
	for (var i = 0; i < numbers.length; i++) {
		totalMultiply = (totalMultiply* numbers[i]);
	}
	return totalMultiply;
}

console.log(multiplyArray([2,4,6,8]));

//2
 
function reverse(string) {
    var text = '';
    
    for (var i = string.length - 1; i >= 0; i--) {
    	text += string[i];}
    return text;
}
console.log(reverse("!aloh"));

//3

var words = ["Hola!", "Hello", "Hi", "Hello world" ];


function findLongestWord(string){

    for (var i=0; i < words.length-1; i++){
        
        var longestWord = [];
        
        if (longestWord.length < words[i].length) {

            longestWord = words[i];
    }
   
    
}
console.log("The longest word is " + words[i]);
return longestWord;
}
  findLongestWord(words);
  
//4


//Part 2

function tellFortune(name, job_title, location, question){

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
        "No Way"];
 
 
    var random= Math.floor(Math.random()* 11);
 
    console.log(  name  + "  "  
     + job_title 
     +  " from "
      +  location  
      + "  ,asks  " 
      + question +  "," 
       + fortunes[random]);
 
    }
 
    tellFortune('Halima', 'IT', 'Riyadh', 'will I win the lottery this week?')






    
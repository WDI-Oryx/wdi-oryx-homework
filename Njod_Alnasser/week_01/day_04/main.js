//part1-1

function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
console.log(sum([1,2,3,4]));


function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
console.log(multiply([1,2,3,4]));

//part1-2


function reverseString(word) {
  
    var newWord = "";
 
    for (var i = word.length - 1; i >= 0; i--) { 
        newWord= newWord + word[i]; 
    }
    return newWord; 
}

console.log(reverseString("Njod Alnasser"));


//part1-3
function findLongestWord(Ar){
    var arrLength="";
    for(var i=0; i<=Ar.length-2 ;i++){
        if(Ar[i].length>Ar[i+1].length){
            arrLength=Ar[i].length;
        }
        else {
        arrLength=Ar[i+1].length;
    }
}
console.log(arrLength);
}
console.log(reverseString("Njod"));
var Ar=["Njod","Alnasser"];
findLongestWord(Ar);



//part1-4
function filterLongWords(Ar, number) {
  var  newAr= []
  for (i = 0; i < Ar.length; i++) {
    if (Ar[i].length > number) {
      newAr.push(Ar[i])
    }
  }
  console.log(newAr)
}



//part2

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

    console.log(" The"  + "  "  +     job_title  + "  "   +   name    +  "   of   " +  location  + "  ,asks  " +question+ "  ...  "+fortunes[random]);

    }

    tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?')


//Part 1 Array Algorithms
// 1.1
document.write("<h1>Homework day 4- Arrays and Loops</h1>");
document.write("<h2>part 1: Array Algorithms</h2>");
document.write("<h3> 1.1:</h3>");
var numbers =[1,2,3,4,5];
function sumArray(array){
    var sum = 0;
    for(var s=0; s<array.length; s++)
    {
    sum = sum +array[s];}
    return sum;

}
document.write("the sum of all numbers in the array is: "+sumArray(numbers));
//1.2
document.write("<h3> 1.2:</h3>");

function multiplyArray(a){
    var multi = 1;
    for(var m=0; m<a.length; m++)
    {
        multi = multi *a[m];}
    return multi;
}
document.write("the multiplication of all numbers in the array is: "+multiplyArray(numbers));

//2
document.write("<h3> 2:</h3>");

function reverseString(str){
    var stringArray =[];
    var reversed ="";
    for(var x=0; x<str.length; x++){
       stringArray[x]=str[x];
        
    } for(var y=stringArray.length-1; y>=0;y--){
        reversed += stringArray[y];
       }

    return reversed;
}
document.write("when we reverse the sentence 'hello good evening' we get: "+reverseString("hello good evening"));


//3
document.write("<h3> 3:</h3>");

function findLongestWord(wordsArray){
    var max =0;
for(var l= 0; l<wordsArray.length; l++)
{ var length = wordsArray[l].length;
    if(length>max){
        max = length;
    }

}
document.write("the longest word has a length of "+max);
}
var longWord =["cat","wonderful","smart","sand","light","chocolate","tree","cloud"];
findLongestWord(longWord);
//4
document.write("<h3> 4:</h3>");
document.write("array: "+longWord+"<br>");
function filterLongWords(arrayOfWords, num){
    var longest = num;
    var newArray =[];
    for(var w= 0; w<arrayOfWords.length; w++)
{ var length = arrayOfWords[w].length;
    if(length>=longest){
        newArray.push(arrayOfWords[w]);
    }
}return newArray;
}
document.write("the new array with words 5+ long: "+filterLongWords(longWord,5));


//part 2: Zoltair
document.write("<h2>part 2: Zoltair</h2>");

function tellFortune( name, jobTitle, location, question ){
    var random = Math.floor(Math.random()*10);
    var questionIS , answerIs;
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
    questionIS = jobTitle +", "+name+" from"+location+", asks "+question+ "? ";
 answerIs = fortunes[random];
    document.write(questionIS+" answer is: "+answerIs);
        
       

}
tellFortune("Sara","Developer","Riyadh","will I be smart by the end of the year?")
document.write("<h2>part 3: Bounus - House of Cards</h2>");
document.write("<h3> 1:</h3>");
//Part 3: Bounus - House of Cards
var fullDeck =[];
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
for(var a=0; a<suits.length;a++){
    for(var b=0; b<values.length;b++){
        var card=suits[a]+values[b];
        fullDeck.push(card);
       
} 
}
document.write("Here is our full Deck with "+fullDeck.length+"52 cards: "+fullDeck);
//2
document.write("<h3> 2:</h3>");

function randomDeck(allCards){
    var randCard = Math.floor(Math.random()*52);
    var value;
    for(var n =0; n<allCards.length;n++){
    if(allCards[randCard].endsWith('A')){
        value= 10;
} else if(allCards[randCard].endsWith('J')||allCards[randCard].endsWith('Q')|allCards[randCard].endsWith('K'))
{value = 11;}
else value = allCards[randCard].substr(1);}
document.write(allCards[randCard]+"'s value is: "+value);}
randomDeck(fullDeck);
 
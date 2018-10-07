//Define a function sumArray and a function multiplyArray that sums 
//and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sumArray([1,2,3,4]) should return 10
//and multiplyArray([1,2,3,4]) should return 24.
var array = [1,2,3,4];
var i = 0;
var sum = 0;
var mult = 1;
function sumArray (array)
{
    while(array.length > i)
    {
        sum += array[i];
        i++;
    }
    console.log("The sum of the array is: " + sum);
}

function multiplyArray(array)
{
    for( var j=0 ; array.length > j ; j++)
    {
        mult *= array[j];
    }
    console.log("The multiplcation of the array is: " + mult);
}

sumArray(array);
multiplyArray(array);

console.log("");
//--------------------
/*Define a function reverseString that reverses a string. For example, 
reverseString("jag testar") should return the string "ratset gaj". */
var Text ="Jafar Abdullah";
function reverseString(Text)
{   var count = 0;
    var reverse = "";
    var re = Text.length;
    while( Text.length > count )
    {
        reverse += Text[re-=1];
        count++;
    }
    console.log ("Text befor: " + Text + " \nText after: " + reverse);
}
reverseString(Text);

console.log("");
//--------------------
/* Write a function findLongestWord that takes an array of words 
and returns the length of the longest word in the array.
 */
var classArray = ['student', 'student', 'student', 'leadInstructor', 
'student', 'leadInstructor', 'associateInstructor', 'student'];
var LongestWord = 0;

function findLongestWord(classArray)
{   var word = classArray[0].length;
    for( var t = 1 ; classArray.length > t; t++ ) 
    {   
    
        if(classArray[t].length > word)
        {
            LongestWord = classArray[t].length; 
        } 
        //console.log(LongestWord);
    }
    console.log(LongestWord);
}
findLongestWord(classArray);

console.log("");
//--------------------
/* Write a function filterLongWords that takes an array of words and a number i and 
returns a new array of words that are longer than i characters long.*/

function filterLongWords(classArray , numChar)
{   var LongWords =[];
    for (var q=0;classArray.length > q ; q++)
    {
        if (classArray[q].length > numChar)
        {
            LongWords.push(classArray[q]);
        }
    }
    console.log(LongWords);
}

filterLongWords(classArray , 8);

console.log("");
//--------------------
 
/* Part 2: Zoltair: */
function tellFortune (name, job, location, question)
{
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
      var num = parseInt(fortunes.length *  Math.random());
      var random = fortunes[num];

      console.log("The " + job + ", " + name + " of " + location + ", "
      + "asks '" + question + "' ... " + random);
}
tellFortune ("Jafar", "AI","Alhasa","will I win the lottery this week?");

console.log("");
//--------------------
// Part 3: BONUS - House of Cards:
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function fullDeck (suits,values)
{
    var array = [];
    for (var m=0; suits.length > m ; m ++)
    {
        for (var n=0; values.length > n ; n ++)
        {
            array.push(suits[m]+values[n]);
        }
    }
    
    //console.log(array);
    return array;
}
fullDeck (suits,values);

// Part 3: BONUS - House of Cards:
function calCards(cards)
{   console.log(cards);
    var blackjack= 0;
    var card1 = cards[parseInt(cards.length *  Math.random())];
    var card2= cards[parseInt(cards.length *  Math.random())];
    console.log("card 1: " + card1 +"\ncard 2: "+card2);
    
    if (card1.endsWith("A"))
    {
        blackjack += 11; 
    }
    else if (card1.endsWith("J") || card1.endsWith("Q") || card1.endsWith("K"))
    {
        blackjack += 10; 
    }
    else 
    {
        var num = parseInt(card1.slice(1));
        blackjack += num;
    }

    if (card2.endsWith("A"))
    {
        blackjack += 11; 
    }
    else if (card2.endsWith("J") || card2.endsWith("Q") || card2.endsWith("K"))
    {
        blackjack += 10; 
    }
    else 
    {
        var num = parseInt(card2.slice(1));
        blackjack += num;
    }
    
        
        return blackjack;
}
console.log("blackjack is : " + calCards( fullDeck (suits,values)));


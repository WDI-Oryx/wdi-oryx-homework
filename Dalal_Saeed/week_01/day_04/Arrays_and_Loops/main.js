///--------------------Homework Day 4------------------///

///## Part 1: Array Algorithms:
function sumArray  (arrayNumbers){
    var sum = 0;
    for (i=0;i<arrayNumbers.length;i++){
       sum  = sum+arrayNumbers[i];
    }
    console.log("The Sum of the numbers is : ",sum); 
  }

  function multiplyArray (arrayNumbers){
      var num = 1;
      for (i=0;i<arrayNumbers.length;i++){
         num  = num*arrayNumbers[i];
      } 
      console.log("The Multiply of the numbers is : ",num);
  }

  var arrayNumbers = [1,2,3];
  sumArray(arrayNumbers);
  multiplyArray(arrayNumbers);
  
  //function reverseString that reverses a string
  function reverseString(word){
      var reverseWord = [];
      for (i=word.length-1;i>=0;i--){
          reverseWord.push(word[i]) ;
      }
      console.log("the reverse string : " + reverseWord.toString()); 
  }
  
  reverseString("loly");
  
  //function findLongestWord 
  function findLongestWord (wordsArray){
      var longestword ;
      longestword=wordsArray[0];
      for (i=0 ; i < wordsArray.length;i++){
          if (longestword.length < wordsArray[i].length){
              longestword=wordsArray[i];
          }
          else{
              longestword= longestword;
          }
      }
      return longestword;
  }
  
  console.log("the longest word is : ",findLongestWord(['kkkk','hfhgf','jjjj','jjjjjjj']))
  
  // function filterLongWords
  function filterLongWords (words,u){
      var newArray = [];
      for (i=0;i<words.length;i++){
         if( words[i].length>u){
          newArray.push(words[i])
      }        
      }
      return newArray;
  }
  console.log("filtering the words result: ",filterLongWords(['ttt','eee','ff'],2))
  
  ///## Part 2: Zoltair:
  // function`tellFortune` 
  function tellFortune(name, jobTitle, location, question){
      var randomNum=0;
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
    randomNum = Math.floor(Math.random() * fortunes.length); 
    return fortune = "The "+jobTitle+"," +name+" of "+location+", asks '"+question+"' ... " +fortunes [randomNum];
  }
  console.log(tellFortune('Moath','Ai','Damam','will I win the lottery this week?'));
  
  
  
  
  // ## Part 3: BONUS - House of Cards:

  //function for whole deck
  function HouseOfCards(){
  var suits = ["S", "H", "D", "C"];
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];  
  var deckCards = [];
  for (i=0;i<suits.length;i++){
      for (j=0;j<values.length;j++){
          deckCards.push(suits[i]+values[j]);
          ;}
  }
  return deckCards;
  }
  console.log(HouseOfCards());
  
  //function for pulling random cards
  function randomBlackjack(){
  var deckCards = HouseOfCards();   
  var randomNum1= Math.floor(Math.random() * deckCards.length); 
  var randomNum2= Math.floor(Math.random() * deckCards.length); 
  blackjackCard1 = deckCards[randomNum1];
  blackjackCard2 = deckCards[randomNum2];
  var ss1= blackjackValuee(blackjackCard1);
  var ss2= blackjackValuee(blackjackCard2);
  console.log("my 1st card : ",blackjackCard1);
  console.log("my 1st card blackjack's value: ",ss1);
  console.log("my 2cd card  : ",blackjackCard2);
  console.log("my 2cd card blackjack's value: ",ss2);
  return blackjackCard1,blackjackCard2;
  }
  randomBlackjack();
  


  //function for blackjack value(i used it inside the randomBlackjack function)
  function blackjackValuee(a){
      var s =[2,3,4,5,6,7,8,9,10];
      var all =[2,3,4,5,6,7,8,9,10,'K','J','Q','A'];
      var s10 = ['K','J','Q'];
      var jackValue;
      for (i=0;i<all.length;i++){
      if (a.includes(s[i])) {
          jackValue = s[i];
          return jackValue;
      }
      else if (a.includes(s10[i])){
          jackValue = 10;
          return jackValue;
      }
      else if (a.includes('A')){
          jackValue = 11;
          return jackValue;
      }
      else {
          jackValue = undefined;
      }
  }
  return jackValue;
  }
  console.log("the result for blackjack value : ",blackjackValuee([4]));
  
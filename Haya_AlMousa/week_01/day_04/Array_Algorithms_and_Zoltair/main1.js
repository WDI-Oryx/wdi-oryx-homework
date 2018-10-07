
// PART ONE

// FIRST

function sumArray(sum) {

    var s = 0

    for (i=0; i<sum.length; i++) {
        s = s + sum[i];
    }
    console.log(s);

}

 sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


function multiplyArray(mult) {

    var m = 1 
    for(i=0; i<mult.length; i++) {
        m = m * mult[i];
    }
    console.log(m);
}

multiplyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// SECOND

function reverseString(reverse) {

    var newStr = '';
    for (var i = reverse.length - 1; i >= 0; i--) {
        newStr += reverse[i];
    }
    console.log(newStr);
}

reverseString([' Haya ', ' Ghaidaa ', ' Lama ', ' Tahany ', ' Maryam ']);


// THIRD

function findLongestWord(str) {

    var longestWord = 0;

    for(var i = 0; i < str.length; i++) {
      if(str[i].length > longestWord) {
      longestWord = str[i].length;
       }
    }
    console.log(longestWord);
  }
  findLongestWord(['Haya', 'Ghaidaaa', 'Lama', 'Tahany', 'Maryam']);


//   FOURTH

function filterLongestWord(name) {

    var largestWord = " ";

    for(var i = 0; i < name.length; i++) {
      if(name[i].length > largestWord) {
      largestWord = name[i];
       }
    }
    console.log(largestWord);
  }
  filterLongestWord(['Haya', 'Ghaidaaa', 'Lama', 'Tahany', 'Maryam']);


// //   PART TWO

function tellFortune(name, jobTitle, location, question) {
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

    var random = Math.floor(Math.random()*12); 

    question = 'will I have a nice car?'

    console.log("The" + jobTitle + "," + name + "of" + location +"," + question + fortunes);
    

}


tellFortune('Joe', 'teacher', 'Tokyo', 'will I have a nice car?');
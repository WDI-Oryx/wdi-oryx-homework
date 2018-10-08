function sumarray() {
     var array1=[1,2,3,4];
     var sum =0;
     for(var i=0;i<=array1.length;i++){
     sum+=i;
     }
     console.log("the sum of the array is "+sum);
     
     }
     sumarray();


function multarray() {
    var array2=[1,2,3,4];
    var mlt=1;
    for(var i=1;i<=array2.length;i++){
        mlt*=i;
    }
    console.log("the multpli of the array is "+mlt);
}

multarray();

function findLongestWord() {
    var words=["Black Olives","Pepperoni","Cheese"]; 
    var longestword=0;
    for(var i=0;i<= words.length; i++){
    if(words[i]> longestword){
        longestword = words[i].length;
    }
   console.log(longestword);
    }


    
}
findLongestWord();

function  filterLongWords(){

var longwords=[];
var number ;
}

function tellFortune(name, jobtitle, location, question) {
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
}
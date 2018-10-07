//part 1

//1
function sumArray (S) {
    var sum=0;
    for (var i=0; i<S.length; i++) {
        sum = sum + S[i];
    } 
    return sum;
} 
console.log(sumArray([1,2,3,4]));


function multiply (M) {
    var multi=1;
    for (var i=0; i<M.length; i++) {
        multi = multi * M [i];
    } 
    return multi;
}
console.log(multiply([1,2,3,4]));


//2
function reverseString (rev) {
    var txt = " ";
    
    for (var i = rev.length - 1; i >= 0; i--) {
    	txt += rev[i];
    	
    }
    return txt.toLowerCase();
}
console.log(reverseString("jag testar"));

//3 
//4

// Part 2 

function tellFortune(name, jobTitle, location, question) {
    var f ="The "+jobTitle+","+name +" "+"of "+location+"," +question+" "+"... Without a doubt"
   
    console.log(f);
}
tellFortune("Moath", "IA", "Demmam", "will I win the lottery this week?");

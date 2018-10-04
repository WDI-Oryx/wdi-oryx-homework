
function sumArray(array){
    var sum=0;
for(i=0;i<array.length;i++){
sum+=array[i];
}
console.log(sum);
}
var arrnum=[1,2,3,4];
sumArray(arrnum);
function multiplyArray(array){
    var multiplay=1;
    for(i=0;i<array.length;i++){
        multiplay*=array[i];
        } 
        console.log(multiplay);     
}
multiplyArray(arrnum);
function reverseString (str){
var string="";
for(i=str.length-1;i>=0;i--){
   string+=str[i];   
}
return string; }


function findLongestWord(arr){
    var wLength="";
    for(i=0;i<arr.length-1;i++){
        if(arr[i].length>arr[i+1].length){
        wLength=arr[i].length;
        } 
        else {
            wLength=arr[i+1].length; 
        }
     }  
     console.log(wLength);
}
//var str="mada";
console.log(reverseString("mada"));
var arr=["mada","alanoud","salma"];
findLongestWord(arr);
function filterLongWords(arr,i){
var arr2=[];
<<<<<<< HEAD
//var num=0;
=======
>>>>>>> f3fe15ba65163be114e0e6bdcd36c304be600c8a
for(j=0;j<arr.length;j++){
    if(arr[j].length>i){
    arr2.push(arr[j]);
    }   
 }  
 console.log(arr2);
}
filterLongWords(arr,4);
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
        "No Way"
      ];
      var rand =Math.floor(Math.random() * 11); 
    console.log ("The "+ job_title+","+ name+" of "+location+", asks "+"'"+question+"'"+ "... "+fortunes[rand]);
}
tellFortune('Moath', 'IA ', 'Demmam', 'will I win the lottery this week?');

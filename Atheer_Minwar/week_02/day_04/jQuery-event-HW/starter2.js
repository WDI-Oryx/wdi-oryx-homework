console.log('starter2.js linked');

$(document).ready(function() {


    
//randomize 
/*zones need to be clicked in a particular order.
//get zones values and place them in an array?
determine if the array's are equal */

var originalZones = ['zone-1', 'zone-3', 'zone-2', 'zone-4'] ;
var zonesValues = [];
var zone = $(".zone");
var int = 0; 


/* When you hover over a zone it should turn green 
if it is the next one that needs to be clicked  
// if the item  (get from original zones for loop)is equal to current hovered over (this.id) item turn it green / use $.inArray() method /index of or if ?*/
/*turn red if it is not.
// same condition but != */

var isEqual = function () {
for (var i = 0; i < originalZones.length; i ++ ){
    var checker = originalZones[i]
    return; 
}
    if( checker === this.id) { 
        $(".zone").on("mouseenter",function(event) {
         $(this).addClass("green");
         $(".zone").on("mouseout",function (event){
         $(this).removeClass("green");
            });
            });
 }  else {  
     $(".zone").on("mouseenter",function(event) {
    $(this).addClass("red");
     }

     
/*When a correct zone is clicked it should stay green*/
function isClicked () {
 if ( checker === this.id)
    {
 $(".zone").on("click",function (event){
 $(this).unbind("mouseout");
  
 $(this).addClass("green") }
    int++ ; 
   }
   }



// Clicking on an incorrect zone should do nothing.
//default white 



// When all zones are green, log a statement of congratulations to the console!
// same log as before if both arrays are equal and all is green 

if (int === 4) {
    console.log("Congrats!")
}


});

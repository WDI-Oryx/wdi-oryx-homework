console.log('starter1.js linked');

//code goes here

$(document).ready(function() {


// 3 Main Events : mouseenter=green , mouseout=remove , click=lock green



//--- When the mouse enters any of the zones change its background color to green ---//
// --- When the mouse leaves a zone change its background color back---//

// 1) mouse leave event

$(".zone").on("mouseenter",function(event) {
$(this).addClass("green");
$(".zone").on("mouseout",function (event){
    $(this).removeClass("green");
});




// --- When you click on a zone it locks its color to green.--- //
// ---remove some event listeners ---// 

$(".zone").on("click",function (event){
 $(this).unbind("mouseout");
  
  $(this).addClass("green");

// // console.log("click");

});



});

// --- When all zones are checked green, log a statement of congratulations to the console! --- // 


var fullZones = 0; 
var theZones = $(".zone");

theZones.each(function() {
if ($(this).hasClass("green")) {
    fullZones++
}
if (fullZones === 4) {

 console.log ("Congrats!")
}
}); 



});

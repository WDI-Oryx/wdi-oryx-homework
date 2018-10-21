$(function(){
    console.log('starter1.js linked');

//     When the mouse enters any of the zones change its background color to green
// When the mouse leaves a zone change its background color back
// When you click on a zone it locks its color to green
///psodocode
//selectthe zone
//apply event listener to it
//change its bg color
//apply another event listener when mouse leaves the zone
//change its bg color
//code goes here

function setBgColor(myThis,color){
    $(myThis).css("background-color",color)  
}

var myEvent ;
$('.zone').on('mouseover',function(event){
    setBgColor(this,"green")
    console.log(this)
    console.log(event)

})

$('.zone').on('mouseleave',function(event){
    setBgColor(this,"white")
    console.log(this)
    console.log(event)

})
$('.zone').on('click',function(event){
    $(this).off('mouseleave')
   // $(this).css("background-color","green") 
    setBgColor(this,"green")
   
    console.log(this)
    console.log(event)

})

$('.zone').each(function(){
    var color = $(this).css('background-color')
    if (color =="green"){
       console.log("Congrats!!");
   }
   
})




})

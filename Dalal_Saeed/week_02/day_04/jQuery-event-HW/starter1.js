$(function(){
    console.log('starter1.js linked');

//     When the mouse enters any of the zones change its background color to green
// When the mouse leaves a zone change its background color back
// When you click on a zone it locks its color to green
//code goes here


$('.zone').on('mouseover',function(){
    $(this).addClass("green")
})

$('.zone').on('mouseleave',function(){
    $(this).toggleClass("green")
})
$('.zone').on('click',function(){
    $(this).off('mouseleave')
   $(this).addClass("green")
   if($('.zone.green').length === 4)
   {
       alert("Congrats!!");
   }
   

})

})

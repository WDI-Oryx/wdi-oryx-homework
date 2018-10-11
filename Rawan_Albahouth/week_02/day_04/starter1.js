// console.log('starter1.js linked');


// function makeZoneGreen(){
//     console.log(this); 
//     this.style.color = "green";

// }
// var firstItem = document.querySelector("#zone-1");
// firstItem.addEventListener("click", makeZoneGreen);

// var secondItem = document.querySelector("#zone-2");
// secondItem.addEventListener("click", makeZoneGreen);

// var thirdItem = document.querySelector("#zone-3");
// thirdItem.addEventListener("click", makeZoneGreen);

// var fourthItem = document.querySelector("#zone-4");
// fourthItem.addEventListener("click", makeZoneGreen);




// $(function(){
// //code goes here

// //When the mouse enters any of the zones change its background color to green
// $('#zone-1').on('mouseenter', function(event){
//     $(this).toggleClass('zone-1');
//     this.style.backgroundColor = "green";

// })
// $('#zone-1').on('mouseleave', function(event){
//     $(this).toggleClass('zone-1');
//     this.style.backgroundColor = "white";

// })

// $('#zone-1').on('click',function(event){
//     $(this).toggleClass('zone-1');
//     this.style.backgroundColor = "green";
//     //  this.style.backgroundColor =  "green";
// })

// // console.log("Congratulation");

//  })


//  function greencolor(x) {
//     x.style.color = "green";
// }
// object.addEventListener("mouseover", greencolor);
// function normalcolor(x) {
//     x.style.color = "white";
 
// }


// var zone = document.querySelector('.zone');
// zone.addEventListener("mouseover", function( event ) {   
//     // highlight the mouseover target
//     event.target.style.color = "orange";

// })

// function makeZoneGreen(){
//     console.log('zone'); // this to tell you which list selected
//     zone.style.color = "green";

// }

// var zones = document.querySelectorAll("#zone-1");
// zones.addEventListener("click", makeZoneGreen);



$(document).ready(function() {

$('.zone').on('mouseenter', function(event){
    $(this).addClass("green");
 
    $('.zone').on("mouseout", function(even){
        $(this).removeClass("green");
    })   
})

$('.zone').on('click', function(event){
    $(this).unbind("mouseout");
    $(this).addClass("green");

});

console.log("Congratulation");





    // $('.zone').hover(
    
    //    function () {
    //       $(this).css({"background-color":"green"});
    //    }, 
        
    //    function () {
    //       $(this).css({"background-color":"white"});
    //    }
    // );
        
    // $(".zone").click(function(){
    // $(this).css({"background-color":"green"});
    // });

 });
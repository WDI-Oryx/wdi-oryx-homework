console.log('starter2.js linked');

//code goes here


console.log('starter2.js linked');

//code goes here
// var zones = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];

// we will reuse (mouseenter)+ (mouseout) and console.log( Congratulation)


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

   var fullZones = 1;
   var theZones = $(“.zone”);

theZones.each(function() {
     if ($(this).hasClass(“green”)) {
       fullZones++
   }
if (fullZones === 4) {

console.log (“Congrats!“)
}
});

});


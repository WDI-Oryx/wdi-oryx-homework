


$(document).ready(function () {

   // When the mouse enters any of the zones change its background color to green
    function green(){
        $(this).css('background-color','green');
    }


//When the mouse leaves a zone change its background color back
    function black(){
        $(this).css('background-color','black')
    }


    //When you click on a zone it locks its color to green.

  function greenClick(){
   $(this).unbind("mouseleave");
     $(this).css('background-color','green');
               
    
     if($(".container div .zone ").stylee.background-color==='green'){
        console.log("congratulations!!!"); 
     }

  
                
      } 
    $('.zone').on("mouseenter",green);
    $('.zone').on("click",greenClick);
    $('.zone').on("mouseleave",black);
})

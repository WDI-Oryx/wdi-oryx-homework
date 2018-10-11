$(function(){
    $("#addHome").css("background-color", "forestgreen");
    $(".add-btn").removeClass("btn-danger").addClass("btn-add");
  
    $("h1").addClass("text-center");
  
    var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    var $body = $('body');
  
    $newLink.appendTo($body);
    $('#zillowLink').attr('href', '_blank');

    $("addHome").click(function(event){
        console.log(event);
        console.log(this);
    
    })

    $(".btn-add").on("mouseenter",function(event){
        $(this).toggleClass("btn-add");
    }) 
  
    $("#homes tbody").on("click","tr",function(){
     console.log(this);
     $(this).remove();
    })
  });
console.log('starter2.js linked');

//code goes here
console.log('starter1.js linked');


//code goes here

$(function(){   
    var arr =['zone-4', 'zone-3', 'zone-1', 'zone-2'];
    var arr1 =['zone-1', 'zone-2', 'zone-3', 'zone-4'];
   
    $(".zone").on("mouseenter",function (event) 
    { 
        var index= arr[0].split("-");
        if (  
              $(this).attr("id").includes(arr[0])
        ||    $(this).attr("id").includes(("zone-"+(parseInt(index[1])+1)))
        ||    $(this).attr("id").includes(("zone-"+(parseInt(index[1])-1))) 
           )
        
        {
            $(this).addClass("green");
        }
        else 
        {
            $(this).addClass("red");
        }
        
    });

     $(".zone").click(function (event) 
     { 
         if ($(this).attr("id")===arr[0])
         {
        $(this).css("background-color", "green");
        arr.shift();
         }
         else 
         {
             setTimeout(function(event){
                $(this).addClass("red");
             },5000);

         }
     });

     $(".zone").on("mouseleave", function(event)
     {
        $(this).removeClass("green");
     });

     $(".zone").on("mouseleave", function(event)
     {
        $(this).removeClass("red");
     });

});

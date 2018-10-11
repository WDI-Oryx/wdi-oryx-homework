$(function(){
    $(".zone").on("mouseenter",function (event) { 
            
         
     $(this).addClass("green");
             
         });
    
         $(".zone").on("mouseleave", function(event){
            $(this).removeClass("green");
        })
    
        $(".zone").on("mouseenter", function(event){
            $(this).css("background-color", "green")
            })
            var count = 0;
            var counta =0;
            var countb =0;
            var countd =0;
            var countc= 0;
                $(".zone").on("click", function(event){
        
                    count++;
                    console.log(count);
                    $(this).css("background-color","green");
                    if (($("#zone-1") === count ===1 && $("#zone-2") === counta ===1 && $("zone-3") === countb ===1 && $("#zone-4") === countd ===1)!==(count ==4))
                {
                    console.log("congratulations");
                }
                })
    });

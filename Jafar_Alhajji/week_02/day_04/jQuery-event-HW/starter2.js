console.log('starter2.js linked');

//code goes here
console.log('starter1.js linked');


//code goes here
$(function(){
    var mainArray=['zone-1', 'zone-2', 'zone-3', 'zone-4'];
    var arr =['zone-2', 'zone-3', 'zone-1', 'zone-4'];
    var testArr = [];
    var index = 0;

       var index=mainArray.indexOf(arr[0]);
            testArr.push(mainArray[index]);
            testArr.push(mainArray[index+1]);
            testArr.push(mainArray[index-1]);
    // for(var i = 0; i<arr.length;i++)
    // {
    //     $(arr[i]).attr("value")
    //     console.log($(arr[i]));
    // }
    console.log()
    $(".zone").on("mouseenter",function (event) 
    { 
        // var index=mainArray.indexOf(id);
        // var d = $(arr[index]).attr("value");
        // if (id === mainArray[index] )
        // {
        //     $(this).addClass("green");
        // }
        // || id === mainArray[index+1] || id === mainArray[index-1]
        
        //find the index of the element from the origin array
        
        
        var id = $(this).attr("value");
        
        
        if (testArr.includes(id))
        {
         debugger;
            $(this).addClass("green");
        }
        else{
            //$(this).addClass("red");
        }
        
    
        
    });
     $(".zone").on("mouseleave", function(event)
     {
        $(this).removeClass("green");
     });

     

    

    


    



    
    


    
});

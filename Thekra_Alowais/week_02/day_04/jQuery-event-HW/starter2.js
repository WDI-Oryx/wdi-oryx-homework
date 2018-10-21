console.log('starter2.js linked');

//code goes here game 2



var array = ['zone-2', 'zone-1', 'zone-3', 'zone-4'];
var $theBox = $('.zone');

$theBox.on('mouseenter', function () {
    var boxIndex = $(this).index();
    var boxId = $(this).attr('id');
    var current = array.indexOf(boxId);
    // for (var i = 0; i < array.length; i++) {
    //     if (boxId === array[0]) {
    //         console.log(boxId + " " + array[0]);
    //         $(this).css('background-color', 'green');
            

    //     } else if (boxId === array[1]) {
    //         console.log(boxId + " " + array[1]);
    //         $(this).css('background-color', 'green');
            
    //     } else if (boxId === array[2]) {
    //         console.log(boxId + " " + array[2]);
    //         $(this).css('background-color', 'green');
            
    //     }else if (boxId === array[3]) {
    //         console.log(boxId + " " + array[1]);
    //         $(this).css('background-color', 'green');
            
    //     }
    // }
})
$theBox.on('mouseleave', function () {
    console.log("mouse leave");
    $(this).css('background-color', '');

})

$theBox.on('click', function () {
    var boxId = $(this).attr('id');
    for (var i = 0; i < array.length; i++) {
        // debugger;
        if (boxId === array[i]) {
            console.log(boxId + " test " );
            $(this).css('background-color', 'green');
            $(this).off('mouseleave');
            // console.log(i);

        }
    }

})






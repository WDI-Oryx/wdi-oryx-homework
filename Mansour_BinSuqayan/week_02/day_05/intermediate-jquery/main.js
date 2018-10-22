
  $(document).ready(function(){
    console.log('javascript connected!');
    var $box = $('.pretty-box');
  
    $('#button1').click(function(){
      // $box.show('slow');
      // $box.fadeIn(1000);
      $box.slideDown();
    });
  
    $('#button2').click(function(){
      // $box.hide('fast');
      // $box.fadeOut(1234);
      $box.slideUp();
    });
  
    $('#button3').click(function(){
      // $box.toggle(1000, myFunction);
      // $box.fadeToggle(3000);
      $box.slideToggle();
    });
  
    $('#button4').click(function(){
      // $box.fadeTo(2000, .5)
    });

    $('#button5').click(function(){
        $box.animate({
            "margin-left":'400px',
            "opacity": "0.5",
            "height":"+=400",
            "width":"+=200"

        }, 5000, changeBackground);
      });
  
  
    function changeBackground() {
      $("body").css("background-color","red");
    }
  });
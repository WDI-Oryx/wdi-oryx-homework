$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var $body = $('body');

//   // 1. Can you create a <div> with the class "duck" and name it "duck"
//   var $duck = $('<div/>');
//   $duck.addClass('duck');
//   body.append($duck);

//   // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)

//   setInterval(toggleFlap, 250)
// function toggleFlap(){
//   $duck.toggleClass('flap');
// }


//   // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
// function moveDuck() {
//   var heighto = Math.random()*window.innerHeight;
//   var widtho = Math.random()*window.innerWidth;
//   $duck.css('left',widtho);
//   $duck.css('top',heighto);
// }
//   // 4. Try making the duck move to a different location after 1 second

//   setInterval(moveDuck, 1000)

  // 5. Congratulations!

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck() {
    var $duck = $('<div/>').addClass('duck'); //if you add <> it means create otherwise select
    $duck.css('top', Math.random() * window.innerHeight)
    $duck.css('left', Math.random() * window.innerWidth)
    $body.append($duck);
    setInterval(function () {
      $duck.toggleClass('flap');
    }, 250)
    setInterval(moveDuck, 1000)
    function moveDuck() {
      $duck.css('left', Math.random() * window.innerWidth);
      $duck.css('top', Math.random() * window.innerHeight);
    }

  }

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (var i = 0; i < 5; i++) {
    createDuck();
  }

  // 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //    it creates a duck, it appears in a random location
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around

  // 10. Well Done!
  var $mousePos = $('<div/>').css('position', 'absolute');
  $body.click((e)=>{
    $mousePos.css({
      width: '100px',
      height: '100px',
      left: (e.clientX-50)+'px',
      top: (e.clientY-50)+'px',
      background: 'url(./images/shot.png)',
      zIndex: 99
    })
    $body.append($mousePos);
    setTimeout(()=>{
      $mousePos.remove();
    }, 50);
  });
});



// $(document).ready(function() {
//   // - Unlike a normal closure, we don't have to call it
//   // - jQuery will call it when the page is loaded

//   // first lets grab the <body></body>
//   var $body = $("body");

//   function createDuck() {
//     // 1. Can you create a <div> with the class "duck" and name the variable "$duck"
//     var $duck = $("<div/>").addClass("duck");
//     $body.append($duck);
//     // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)

//     setInterval(function() {
//       $duck.toggleClass("flap");
//     }, 250);

//     // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

//     $duck.css("top", Math.random() * window.innerHeight);
//     $duck.css("left", Math.random() * window.innerWidth);

//     // 4. Try making the duck move to a different location after 1 second
//     setInterval(function() {
//       $duck.css("top", Math.random() * window.innerHeight);
//       $duck.css("left", Math.random() * window.innerWidth);
//     }, 5000);

//     $duck.on('click', function() {
//       console.log('shot!!!!!!');
//       $duck.addClass('shot');
//       setTimeout(function() {
//         $duck.remove();
//         checkForWinner();
//       }, 100)
//     })

//     return $duck;
//   }

//   function checkForWinner() {
//     if($('.duck').length === 0) {
//       alert('you win!!!!');
//     }
//   }

//   // 5. ------ Here we go! ------

//   // 6. Things are getting a bit messy. Let's create
//   //    a "function" called createDuck() that does everything in 1-4
//   //    and "returns" the duck object
//   // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
//   //    using our fancy new createDuck() function

//   for (var i = 0; i < 5; i++) {
//     createDuck();
//   }

//   // 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
//   //    it creates a duck, it appears in a random location
//   // 8b. The ducks should also move to a random location after 1 second
//   // HINT: Use Math.random() * window.innerWidth    for "left"
//   //       And Math.random() * window.innerHeight   for "top"

//   // 9. Our ducks are going to be easy targets if they only move once.
//   //    Modify createDuck() so the ducks keep moving around

//   //   // 10. ------ We're almost there! ------

//   // 11. BOOM. Attach a "click" event that adds the "shot" class to
//   //     the duck when you click on it!

//   // 12. After a duck has been clicked on, remove it from the DOM after
//   //     a short delay (1 second)

//   // 13. Create a new function named checkForWinner() that reads the DOM
//   //     to see if there are any ducks left. If not, alert "YOU WIN!"

//   // FIN. You win 1 trillion tokens.  Play the day away!
// });
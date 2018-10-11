$("document").ready(function () {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  // var body = $('body');


  // var $duck = $("<div/>").addClass("duck");
  // 1. Can you create a <div> with the class "duck" and name it "duck"
  // body.append($duck);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // setInterval(function () {
  //   $duck.toggleClass("flap")
  // }, 250);

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  // $duck.animate({ top: "200px", left: "200px" }, 1000);


  // 4. Try making the duck move to a different location after 1 second
  // setTimeout(() => {
  //   var randomWidth = Math.floor(Math.random() * window.innerWidth);
  //   var randomHeight = Math.floor(Math.random() * window.innerHeigh);
  //   $duck.animate({ top: "randomHeight", left: "randomWidth" });
  // }, 1000);
  // setInterval(function () {
  //   var randomWidth = Math.floor(Math.random() * window.innerWidth);
  //   var randomHeight = Math.floor(Math.random() * window.innerHeight);
  //   $duck.animate({ top: randomHeight, left: randomWidth });
  // }, 1000);
  // 5. Congratulations!

  function createDuck() {
    var body = $('body');

    var randomWidth = Math.floor(Math.random() * window.innerWidth);
    var randomHeight = Math.floor(Math.random() * window.innerHeight);

    var $duck = $("<div/>").addClass("duck").css({
      top: randomWidth,
      left: randomWidth
    });
    body.append($duck);

    setInterval(function () {
      $duck.toggleClass("flap")
    }, 250);

    setInterval(function () {
      $duck.animate({ top: randomHeight, left: randomWidth });
    }, 1000);
    var $mousePos = $('<div/>').css('position', 'absolute');
    body.click((e) => {
      $mousePos.css({
        width: '100px',
        height: '100px',
        left: (e.clientX - 50) + 'px',
        top: (e.clientY - 50) + 'px',
        background: 'url(./images/shot.png)',
        zIndex: 99
      })
      body.append($mousePos);
      setTimeout(() => {
        $mousePos.remove();
      }, 50);
    });

    $duck.click(function () {
      $duck.remove();
    });

    return $duck;
  }
  setInterval(createDuck, 3400);
  for (var i = 0; i <= 5; i++) {
    createDuck();
  }



});

// 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //    it creates a duck, it appears in a random location
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around

  // 10. Well Done!
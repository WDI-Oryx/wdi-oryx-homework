$(document).ready(function(){

  var birds = [
    {
      "id": 1,
      "name": "Red",
      "abilities": "Targeting directly at pigs",
      "image": "http://bit.ly/1qsISE1",
      "group": "The Flock",
      "species": "bird",
      "feels": "Cupcakes"
    },
    {
      "id": 2,
      "name": "Blue Birds",
      "abilities": "Splitting into three separate birds & slightly speeding up",
      "image": "http://bit.ly/1qsJ8CZ",
      "group": "The Flock",
      "species": "bird",
      "feels": "Ice Cream"
    },
    {
      "id": 3,
      "name": "Chuck",
      "abilities": "Speeding up when screen is tapped",
      "image": "http://bit.ly/2046N8Q",
      "group": "The Flock",
      "species": "bird",
      "feels": "Bananas"
    },
    {
      "id": 4,
      "name": "Bomb",
      "abilities": "Exploding",
      "image": "http://bit.ly/23WMFGK",
      "group": "The Flock",
      "species": "bird",
      "feels": "Ice Cream"
    },
    {
      "id": 5,
      "name": "Matilda",
      "abilities": "Shooting Egg Bombs vertically downward",
      "image": "http://bit.ly/1YAESNv",
      "group": "The Flock",
      "species": "bird",
      "feels": "Bananas"
    },
    {
      "id": 6,
      "name": "Hal",
      "abilities": "Spin back like a boomerang",
      "image": "http://bit.ly/25aS2s2",
      "group": "The Flock",
      "species": "bird",
      "feels": "Cupcakes"
    },
    {
      "id": 7,
      "name": "Big Brother",
      "abilities": "Strength and Momentum",
      "image": "http://bit.ly/22fKsHo",
      "group": "The Flock",
      "species": "bird",
      "feels": "Cupcakes"
    },
    {
      "id": 8,
      "name": "Bubbles",
      "abilities": "Expands to huge size two seconds after impact.",
      "image": "http://bit.ly/1OyR2Ro",
      "group": "The Flock",
      "species": "bird",
      "feels": "Bananas"
    },
    {
      "id": 9,
      "name": "Dahlia",
      "abilities": "Phasing through solid objects and spinning after reaching the target",
      "image": "http://bit.ly/1TYtmKv",
      "group": "The Stella Flock",
      "species": "bird",
      "feels": "Ice Cream"
    },
    {
      "id": 10,
      "name": "Willow",
      "abilities": "Arc in mid-air then spin through blocks",
      "image": "http://bit.ly/1qsKBcx",
      "group": "The Stella Flock",
      "species": "bird",
      "feels": "Bananas"
    },
    {
      "id": 11,
      "name": "Ice Bird",
      "abilities": "Turning surrounding blocks (and pigs) into ice",
      "image": "http://bit.ly/1TXfihp",
      "group": "Ice Flock",
      "species": "bird",
      "feels": "Ice Cream"
    },
    {
      "id": 12,
      "name": "Mighty Eagle",
      "abilities": "Flies Fast and destroying the entire level ",
      "image": "http://bit.ly/1OFg3zK",
      "group": "Mighty Creature",
      "species": "bird",
      "feels": "Cupcakes"
    }
  ]

  /* 1.  Create a function that logs all of the angry birds to the console. */

  function logBirds() {
    console.log(birds)

  }

  logBirds();

  /* 2.  Create a function that logs the name of all the angry birds to the console. */

  function logBirdNames() {
    var birdsNames 
    for (var i = 0 ;i<birds.length;i++){
      birdsNames = birds[i].name+" ,"
    }
return birdsNames
  }


  console.log('d',logBirdNames());

  /* 3.  Create a function that creates a new h1 tag that says "Angry Birds!" and 
  appends it to the div with class "container"  */

  function appendHeader() {
    var $newH1 = $('<h1/>').text("Angry Birds!");
    $(".container").append($newH1);
    console.log($newH1)
  }

  appendHeader();

  /* 
    4.  Create a function that
        a. selects the div with class "container" from the HTML,
        b. appends every bird name to the container p-tags with class "bird".
  */

  function appendBirdNames() {
    var names=logBirdNames()
    var mycontainer = $('.container')
    for (var i = 0 ;i<names.length;i++){
      var myP = $('<p class = "bird"> '+names+ '<p/>');
      //myP.text(names[i])
      
    }

    mycontainer.append(myP)
  }

  appendBirdNames();

  /*
    5.  Create a function that:
        a. targets the div with class "likes cupcakes"
        b. then appends only the birds that have "feels: Cupcakes" properties
            as p-tags with class "bird" 
  */

  function birdsCupcakes(){
    var cupcakes = $('.cupcake-lovers')
    var angryBird = birds[i];
    //     var name = birds[i].name;
    if (angryBird.feels === 'Cupcakes'){
    cupcakes.append

  }

}
// var $cupcakeContainer = $('.cupcake-lovers');
//   for (var i=0;i<birds.length;i++) {
//     var angryBird = birds[i];
//     var name = birds[i].name;
//     if (angryBird.feels === 'Cupcakes')
//     var $newBird = $('<p/>').addClass('bird').text(name);
//     $cupcakeContainer.append($newBird);
// DOM Manipulation

// Change the font-family of the page to "Arial, sans-serif"

document.body.style.fontFamily="Arial, sans-serif"

// Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)

var nicknameSpan = document.querySelector("#nickname")
nicknameSpan.innerHTML ="Athorey";

// Give each li the class of "listitem"

var allListItems = document.querySelectorAll("li");

allListItems.className = "listitems";

// console.log(allListItems);

// Change each li's text color to "rebeccapurple"

for (var i = 0; i<allListItems.length; i++) {
allListItems[i].style.color = "rebeccapurple";
};

// Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"

var myImage = document.createElement("img");

myImage.setAttribute("src","https://shawglobalnews.files.wordpress.com/2013/04/157636471.jpg?quality=70&strip=all&w=720");

var profilePic = document.querySelector(".profilePicture")
profilePic.appendChild(myImage)


var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];

//   Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks

  var myHeading = document.createElement("h1");
  myHeading.innerText="My Book List"; 

  var headingPlace = document.querySelector(".favoriteBooks");

  headingPlace.appendChild(myHeading);


// for (var keys in books) {
// var bookInfo = Object.keys(books);
 

// Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

for (var b = 0; b<books.length; b++)
{
     var bookInfo = books[b]; 

     var newPar = document.createElement("p");
     newPar.innerText = (bookInfo["title"] + " by " + bookInfo ["author"]); 

    var parPlace = document.querySelector ("body");
    parPlace.appendChild (newPar);
 }


// Turn the books into an unordered list filled with list items // incomplete -


// var bookList = document.createElement("ul");
// var bookItems = document.createElement("li"); 
// for (var t = 0; t<books.length; t++) 
// { 
//     var bookListItems = books[t] 
// bookItems.innerText = (books[t]["title"] + " by " + books[t] ["author"]);
// }

// var bookImage = document.createElement("img"); 



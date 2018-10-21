// Change the font-family of the page to "Arial, sans-serif"

document.body.style.fontFamily = "Arial, sans-serif";


// Replace each of the span tags (nickname, favorite, hometown)
//with your own information (e.g. put your nickname in the 
//nickname span)

var spanChange = document.querySelector("#nickname");
spanChange.innerHTML = "Noura";

var spanChange = document.querySelector("#favorite");
spanChange.innerHTML = "Fish";

var spanChange = document.querySelector("#hometown");
spanChange.innerHTML = "Riyadh";


// Give each li the class of "listitem"
var listChange = document.querySelectorAll("li");
for (var i = 0; i < listChange.length; i++) {
  var currentList = listChange[i];
  currentList.setAttribute("class", "listitem");
  // Change each li's text color to "rebeccapurple"
  currentList.style.color = "rebeccapurple";
}


// Create a new img element and set its src attribute to 
//a picture of you. Put that new img element in the div with 
//the class of "profilePicture"

var newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/400/300");

var imgDiv = document.createElement("div");
imgDiv.setAttribute("class", "profilePicture");

var targetDiv = document.querySelector("div.profilePicture");
targetDiv.appendChild(newImg);

//BOOK-LIST

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

// Create an h1 with the text of "My Book List", and put it 
// inside div.favoriteBooks

var header = document.createElement("h1");
header.innerHTML = "My Book List";
var bookDiv = document.querySelector("div.favoriteBooks");
bookDiv.appendChild(header);

// Iterate through the array of books. For each book, 
// create a p tag with the book title and author (e.g. 
//  "The Most Human Human, by Brian Christian"). Append it 
//  to the page


for (var i = 0; i < books.length; i++) {
  var bookTitle = books[i].title;
  var bookAuthor = books[i].author;
  var bookPar = document.createElement("p");
  bookPar.innerHTML = bookTitle + ", by " + bookAuthor;
  document.body.appendChild(bookPar);



}
//Bonus

// Turn the books into an unordered list filled with list items
// Add a property to each book with a URL of the book cover image. 
for (var i = 0; i < books.length; i++) {
  var uList = document.createElement("ul");
  document.body.appendChild(uList);

  var list = document.createElement("li");
  list.innerHTML = books[i].title +", by " +books[i].author;
  uList.appendChild(list);

  var cover = document.createElement("a");
  cover.innerHTML = " page cover";
  cover.setAttribute("href", "https://upload.wikimedia.org/wikipedia/en/3/33/The_Design_of_Everyday_Things_%28cover_1988%29.jpg")
  list.appendChild(cover);
  

}


// For each book, add an img element for each book on the page
// Change the style of the book depending on whether you have 
// read it or not (e.g. make the text color red if you have read it)
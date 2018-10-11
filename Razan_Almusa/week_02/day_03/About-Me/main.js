// Change the font-family of the page to "Arial, sans-serif"
var pageFont = document.querySelector("body");
pageFont.style.fontFamily = "Arial, sans-serif";

//Replace each of the span tags
//(nickname, favorite, hometown) with your own information
var span = document.querySelectorAll("span");

var nickname = document.querySelector("#nickname");
nickname.innerHTML = "Razan";

var favAnimal = document.querySelector("#favorite");
favAnimal.innerHTML = "Panda";

var hometown = document.querySelector("#hometown");
hometown.innerHTML = "Riyadh";

//Give each li the class of "listitem"

var allListItems = document.querySelectorAll("li");
for (let i = 0; i < allListItems.length; i++) {
  allListItems[i].setAttribute("class", "listitem");

  //Change each li's text color to "rebeccapurple"

  allListItems[i].style.color = "rebeccapurple";
}

//Create a new img element and set its src attribute to a picture of you.

var pic = document.createElement("img");

pic.setAttribute("src", "https://fillmurray.com/300/300");
//document.body.appendChild(pic);

//Put that new img element in the div with the class of "profilePicture"
document.querySelector(".profilePicture").appendChild(pic);

//////////////////////////////////////////////////////////////////////////////////////////

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

//Create an h1
var heading = document.createElement("h1");

//with the text of "My Book List"
heading.innerHTML = "My Book List";

//and put it inside div.favoriteBooks
document.querySelector(".favoriteBooks").appendChild(heading);

//Iterate through the array of books.
/// For each book, create a p tag with the book title and author

var array = document.createElement("ul");

for (var i = 0; i < books.length; i++) {
  var book = document.createElement("p");
  book.innerHTML = books[i].title + " ,by " + books[i].author;

  array.appendChild(book);
}
document.body.appendChild(array);

// Bonus

bookList = "";
for (var i = 0; i < array.length; i++) {
  bookList += "<li>" + array + "</li>";
}

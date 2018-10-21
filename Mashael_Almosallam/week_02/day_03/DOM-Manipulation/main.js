
//Change the font-family of the page to "Arial, sans-serif"
document.body.style.fontFamily = "Arial, sans-serif";

//Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
var newNickname = document.querySelector("#nickname");
newNickname.innerHTML = ("Mashael");
var newFavorite = document.querySelector("#favorite");
newFavorite.innerHTML = ("Fish");
var newHometown = document.querySelector("#hometown");
newHometown.innerHTML = ("Riyadh");

/* //Give each li the class of "listitem"
var allListItems = document.querySelectorAll("li");
var currentItems=allListItems.getAttribute = ("class", "listitem");
//Change each li's text color to "rebeccapurple"
currentItems.style.color = "rebeccapurple"; //NOT WORKING
//debugger;
 */

var allListItems = document.querySelectorAll("li");

for (var i = 0; i < allListItems.length; i += 1) {
    var currentItem = allListItems[i];
    currentItem.getAttribute = ("class", "listitem");
    currentItem.style.color = "rebeccapurple";
}
//Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"

var newImage = document.createElement("img");
newImage.setAttribute("src", "https://fillmurray.com/300/300")
var div= document.querySelector("div.profilePicture");div.appendChild(newImage); //NOT WORKING

/* ___________________________
    The Book List 
    __________________________*/

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
//Create an h1 with the text of "My Book List", and put it inside div.favor
var heading = document.createElement("h1");
heading.innerText="My book list";

//Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page
var paragraph = document.createElement("p");

for(i=0;i<books.length;i++){
     // console.log(  Document.innerText= books[i] + ", by "  );
    }
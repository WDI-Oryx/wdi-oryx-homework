//Change the font-family of the page to "Arial, sans-serif"
var body = document.querySelector("body")
body.setAttribute("font-family","Arial, sans-serif")
//Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
var nickname = document.querySelector("#nickname")
var favorite = document.querySelector("#favorite")
var hometown = document.querySelector("#hometown")
nickname.innerText = "Dalal"
favorite.innerText = "Cats"
hometown.innerText = "Riyadh"

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

  //Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
  var h1 = document.createElement("h1");
  h1.innerText="My Book List";
  document.querySelector("div.favoriteBooks").appendChild(h1);
  var myBook=[] ;
 /*terate through the array of books. For each book, create a p tag with the book title and author 
(e.g. "The Most Human Human, by Brian Christian"). Append it to the page */
for (var i =0; i<books.length;i++){
    myBook[i] = document.createElement("p");
    myBook[i].innerText =books[i].title+ ",by "+books[i].author
    body.appendChild(myBook[i])
}
//Give each li the class of "listitem"
//Change each li's text color to "rebeccapurple"
var listitem= document.querySelectorAll("li");
for (var i = 0 ;i<listitem.length;i++){ 
    listitem[i].setAttribute("class","listitem");
    listitem[i].style.color ="rebeccapurple" 
}
//Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
myPic = document.createElement("img");
myPic.setAttribute("src","myavatar.png")
document.querySelector("div.profilePicture").appendChild(myPic)


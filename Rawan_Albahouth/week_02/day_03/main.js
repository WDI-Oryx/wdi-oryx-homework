// Change the font-family of the page to "Arial, sans-serif"
var body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";


// Replace each of the span tags (nickname, favorite, hometown) 
//with your own information (e.g. put your nickname in the nickname span)
var spanNickName = document.querySelector("#nickname");
spanNickName.innerText = "RA";

var spanFavorite = document.querySelector("#favorite");
spanFavorite.innerText = "Cat";

var spanHomeTown = document.querySelector("#hometown");
spanHomeTown.innerText = "Riyadh";


//Give each li the class of "listitem"
var li = document.querySelectorAll("li");
for (var i=0; i<li.length; i+=1){
    var list = li[i];
    list.setAttribute("class", ".listitem");
}


//Change each li's text color to "rebeccapurple"
var li2 = document.querySelectorAll("li");
for (var i=0; i<li2.length; i+=1){
    var currentLi = li2[i];
     currentLi.style.color = "rebeccapurple";
}



//Create a new img element and set its src attribute to a picture of you.
// Put that new img element in the div with the class of "profilePicture"
var image = document.createElement("img");
image.setAttribute("src", "https://source.unsplash.com/600x500");
var targetDiv = document.querySelector(".profilePicture");
targetDiv.appendChild(image);




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

//Create an h1 with the text of "My Book List",
// and put it inside div.favoriteBooks
var heading = document.createElement("h1");
heading.innerText = "My Book List";
var distenation = document.querySelector(".favoriteBooks");
distenation.appendChild(heading);


//Iterate through the array of books. For each book, 
//create a p tag with the book title and author (e.g. "The Most Human Human, 
//by Brian Christian"). Append it to the page
for(var i=0; i<books.length; i+=1){
    var title = books[i].title;
    var author = books[i].author;
    
   var paragraph = document.createElement("p");
   paragraph.innerHTML = (title +" "+ "By" +" "+ author) ;
   document.body.appendChild(paragraph);  

}



document.body.style.fontFamily = "Arial, sans-serif";

var nickName = document.querySelector("#nickname");

nickName.innerHTML = "Halima";

var favoriteAnimal = document.querySelector("#favorite");

favoriteAnimal.innerHTML = "Cat";

var homeTown = document.querySelector("#hometown");
homeTown.innerHTML = "Riyadh";

var listItem = document.querySelectorAll("li");

listItem.className = "listitems";

for(var i=0;i<listItem.length; i++){
    listItem[i].style.color = "rebeccapurple";
}

var img = document.createElement("img");

img.setAttribute("src", "https://picsum.photos/200");

var targetDiv= document.querySelector("div.profilePicture");
targetDiv.appendChild(img);

// 
// 

var books = [
    {
      title: "The Design of Everyday Things,",
      author: "Don Norman.",
      alreadyRead: false
    },
    {
      title: "The Most Human Human,",
      author: "Brian Christian.",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time,",
      author: "Marcel Proust.",
      alreadyRead: true
    },
    {
      title: "Ulysses,",
      author: "James Joyce.",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby,",
      author: "F. Scott Fitzgerald.",
      alreadyRead: true
    }
  ];

  var newHeading= document.createElement("h1");
newHeading.innerHTML= "My Book List";
var Div= document.querySelector("div.favoriteBooks");
Div.appendChild(newHeading);

// for (var i = 0; i < books.length; i++) {
//     var para = document.createElement("p");
//     var bookDescription = document.createTextNode(books[i].title + " by " + books[i].author);
//     para.appendChild(bookDescription);
//     document.body.appendChild(para);
//   }
        
  var bookList = document.createElement("ul");

for (var i = 0; i < books.length; i++) {
    var bookItem = document.createElement("li");
    var bookDescription = document.createTextNode(books[i].title + " by " + books[i].author);
    bookItem.appendChild(bookDescription);
    document.body.appendChild(bookItem);
  }


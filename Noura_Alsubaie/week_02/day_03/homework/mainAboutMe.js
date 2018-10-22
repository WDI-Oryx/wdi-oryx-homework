// Change the font-family
document.body.style.fontFamily= "Arial, sans-serif"

// Replace each tag
var newNickname= document.querySelector("#nickname");
var newfavorite= document.querySelector("#favorite");
var newHometown= document.querySelector("#hometown");


newNickname.innerHTML= "Nora";
newfavorite.innerHTML="cat";
newHometown.innerHTML="Riyadh";

//Give a class

var liList= document.querySelectorAll("li");
for (var i=0; i < liList.length; i++) {
    liList[i].setAttribute("class", "listitem");
}

// Change text color.
// liList.style.color="rebeccapurple";

// Creat New img + set "src"
var newImg = document.createElement("img");
newImg.setAttribute("src", "https://fillmurray.com/g/200/300");
document.querySelector(".profilePicture").appendChild(newImg);

/////



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

  var newHeading= document.createElement("h1");
  newHeading.innerHTML= "My Book List";

  newHeading.setAttribute("div", ".favoriteBook");


  
  for( var y=0 ; y < books.length; y++){
    var newPara= document.createElement("p");
     newPara.innerHTML=  books[y].title+", by "+ books[y].author;
    document.querySelector(".favoriteBooks").appendChild(newPara);
  }
  
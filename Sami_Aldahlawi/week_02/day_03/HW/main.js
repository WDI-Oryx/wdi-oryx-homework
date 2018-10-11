// Change the font family of Page
var bodyFont = document.querySelector("body");
bodyFont.style.fontFamily = "Arial, sans-serif";

var nickName = document.querySelector("#nickname");
var favoriteAnimal = document.querySelector("#favorite");
var homeTown = document.querySelector("#hometown");

nickName.innerText = "Sami"
favoriteAnimal.innerText = "Wolf";
homeTown.innerText = "Riyadh";

var eachList = document.querySelectorAll("li");
for(var i = 0 ; i < eachList.length ; i++){
    eachList[i].setAttribute("class","listitem");
    eachList[i].style.color = "rebeccapurple";
}

var proPicture = document.querySelector(".profilePicture");
var newImg = document.createElement("img");
newImg.setAttribute("src" ,"https://consequenceofsound.files.wordpress.com/2018/08/mac-and-me.jpg?quality=80&w=768");
proPicture.appendChild(newImg);

var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      src:"https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L._SX316_BO1,204,203,200_.gif"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      src:"https://images.gr-assets.com/books/1295465264l/8884400.jpg"
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true,
      src:"https://images.gr-assets.com/books/1475760429l/32486595.jpg"
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      src:"https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      src:"https://almabooks.com/wp-content/uploads/2016/10/9781847496140.jpg"
    }
  ];

  function alreadyRead(val){
    if(val.alreadyRead){
        listBooks.style.color = "red";
        return "Yes, already Read";
    }
    return "No, I did not read it";
}

  var headFavoriteBook = document.querySelector(".favoriteBooks");
  var addBook = document.createElement("h1");
  addBook.innerText = "My Book List";
  headFavoriteBook.appendChild(addBook);

  var unorderListBooks = document.createElement("ul");

  
  for(var i in books){
    var listBooks = document.createElement("li");
    var imgBooks = document.createElement("img");
      listBooks.innerText = books[i].title + " By " + books[i].author + ", and " + alreadyRead(books[i]);
      imgBooks.setAttribute("src",books[i].src);
      listBooks.appendChild(imgBooks);
      unorderListBooks.appendChild(listBooks);
  }
  headFavoriteBook.appendChild(unorderListBooks);
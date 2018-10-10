// About me
document.body.style.fontFamily = "Arial, sans-serif";

var nickname = document.querySelector("#nickname");
nickname.innerText = "Tekka";
var favAnimal = document.querySelector("#favorite");
favAnimal.innerText = "Cats";
var home = document.querySelector("#hometown");
home.innerText = "Riyadh";

var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
    var currentList = listItems[i];
    currentList.setAttribute("class", "listitem");
    currentList.style.color = "rebeccapurple";
}

var newImg = document.createElement("img");
newImg.setAttribute("src", "http://www.fillmurray.com/400/400");
var newDiv = document.querySelector(".profilePicture");
newDiv.appendChild(newImg);

//The Book List
var books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: "http://www.fillmurray.com/400/400"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: "http://www.fillmurray.com/400/400"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        image: "http://www.fillmurray.com/400/400"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true,
        image: "http://www.fillmurray.com/400/400"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true,
        image: "http://www.fillmurray.com/400/400"
    }
];

var bookList = document.createElement("h2");
bookList.innerText = "My Book List";
var favBookDiv = document.querySelector(".favoriteBooks");
favBookDiv.appendChild(bookList);
for (var i = 0; i < books.length; i++) {
    currentItem = document.createElement("ul");
    currentItem.innerText += books[i].title;
    currentItem.innerText += ", " + books[i].author;
  
    if (books[i].alreadyRead) {
        currentItem.style.color = "red";
    }
    favBookDiv.appendChild(currentItem);
}

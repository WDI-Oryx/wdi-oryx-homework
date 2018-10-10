var body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";
var nickname = document.querySelector("#nickname");
nickname.innerHTML = "Abdullah AlQahtani";
var favorite = document.querySelector("#favorite");
favorite.innerHTML = "Cats";
var hometown = document.querySelector("#hometown");
hometown.innerHTML = "Khobar";
var listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "listitem");
    listItems[i].style.color = "rebeccapurple";
}

var image = document.createElement("img");
image.setAttribute("src", "https://pbs.twimg.com/profile_images/1010111911185338368/wtaSqmnZ_400x400.jpg");
document.querySelector(".profilePicture").appendChild(image);

var books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        url: "htt"
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

var heading1 = document.createElement("h1");
heading1.innerHTML = "My Book List";
document.querySelector(".favoriteBooks").appendChild(heading1);

var ul = document.createElement("ul");

for (let i = 0; i < books.length; i++) {
    var book = document.createElement("li");
    book.innerHTML = books[i].title + ", By " + books[i].author;
    
    ul.appendChild(book);
}
document.body.appendChild(ul);
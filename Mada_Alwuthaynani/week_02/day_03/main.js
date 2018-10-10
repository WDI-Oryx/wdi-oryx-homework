
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
document.body.style = "Arial, sans-serif";
var span = document.querySelectorAll("span");
var li = document.querySelectorAll("li");
// li.style.color = "rebeccapurple";
var arr = ["meme", "Horse", "Taif"]
for (var i = 0; i < span.length; i++) {
    li[i].classList.add("listitem");
    span[i].innerText = arr[i];
    li[i].style.color = "rebeccapurple";
    // li[i].setAttribute(class, "listitem");
}
var img = document.createElement("img");
var set = img.setAttribute("src", "https://t4.ftcdn.net/jpg/01/40/46/19/160_F_140461947_tWo9D0W8QQnrhzhCXJbDHIXblMV9BTZv.jpg");
document.querySelector("div.profilePicture").appendChild(img);
var h1 = document.createElement("h1");
h1.innerText = "My Book List";
var div = document.querySelector("div.favoriteBooks");
div.appendChild(h1);
for (var i = 0; i < books.length; i++) {
    var p = document.createElement("p");
    if (books[i].alreadyRead) {
        p.innerText = books[i].title + ",by " + books[i].author;
    }
    div.appendChild(p);
}
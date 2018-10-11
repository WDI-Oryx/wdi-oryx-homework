
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
//Change the font-family of the page to "Arial, sans-serif"
document.body.style.fontFamily = "Arial, sans-serif";

//Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
var nickname = document.querySelector("span#nickname");
var favorite = document.querySelector("span#favorite");
var hometown = document.querySelector("span#hometown");
console.log(nickname);
nickname.innerText = " Homo Sapien";
favorite.innerText = " Elephants, Snails, Deers, Dogs, Cats";
hometown.innerText = "No Place Like ~";

/* Give each li the class of "listitem"
              &
Change each li's text color to "rebeccapurple" */
var li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {
    li[i].setAttribute("class", "listitem");
    li[i].style.color = "rebeccapurple";
}

//Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
var profileImg = document.createElement("img");
profileImg.setAttribute("src", "https://img0.etsystatic.com/139/0/8196359/il_fullxfull.861288076_a4si.jpg");
var targetDiv = document.querySelector("div.profilePicture");
targetDiv.appendChild(profileImg);
profileImg.style.width = "150px";

//Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
var h1 = document.createElement("h1");
h1.innerText = "My Book List";
var booksDiv = document.querySelector("div.favoriteBooks");
booksDiv.appendChild(h1);

//Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page
for (var bi = 0; bi < books.length; bi++) {
    var title = books[bi].title;
    var author = books[bi].author;
    var p = document.createElement("p");
    p.innerText = title + ", by " + author;
    var body = document.querySelector("body");
    body.appendChild(p);




}

//Bonus



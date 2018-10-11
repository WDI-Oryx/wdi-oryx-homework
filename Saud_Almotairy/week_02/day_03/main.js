console.log("Hello")
var body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

var myNickName = document.querySelector("#nickname");
var myFavor = document.querySelector("#favorite");
var myHome = document.querySelector("#hometown");

myNickName.innerText = "Abo Hisham";
myFavor.innerText = "Alsharfa";
myHome.innerText = "Riyadh";

var allListItems = document.querySelectorAll("li");
for (var i = 0; i < allListItems.length; i += 1) {
    var currentItem = allListItems[i];
    currentItem.classList.value = "listitem";
    currentItem.style.color = "rebeccapurple";
}

// for (var i = 0; i < allListItems.length; i += 1) {
//   var currentItem = allListItems[i];
//   currentItem.innerHTML += "!!!";
//   if (i % 2 === 0) {
//     currentItem.style.color = "rebeccapurple";
//   } else {
//     currentItem.style.color = "lemonchiffon";
//   }

var myImg = document.createElement("IMG");
myImg.setAttribute("src", "https://drive.google.com/open?id=15inBOlt-Z_YH_2bnGTvaIVxt_yEV3M0A/300/300");

var divProf = document.querySelector("div.profilePicture");
divProf.appendChild(myImg);




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


var booksHeading = document.createElement("h1");

booksHeading.innerText = "My Book List";

var booksDiv = document.querySelector("div.favoriteBooks");
booksDiv.appendChild(booksHeading);
console.log(books);

for (i=0; i<books.length; i++) {
    var newP[i] = 
}
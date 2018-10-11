document.body.style.fontFamily = "Arial, sans-serif";

var namee = document.querySelector("#nickname");
namee.innerHTML = "Sarah";

 var fav = document.querySelector("#favorite");
fav.innerHTML = "a horse";

 var hom = document.querySelector("#hometown");
hom.innerHTML = "Irqaa,Riyadh";



var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
    var creat = list[i];
    creat.setAttribute("class", "list");
   
    creat.style.color = "rebeccapurple";
}
var creatImg = document.createElement("img");
creatImg.setAttribute("src", "file:///C:/Users/saraf/wdi/wdi-oryx-homework/Sarah_Alasadi/week_02/day_03/image/4.jpeg");

 var imgee = document.createElement("div");
 imgee.setAttribute("class", "profilePicture");
 var target = document.querySelector("div.profilePicture");
 target.appendChild(creatImg);

 ////
 ///

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


  var h = document.createElement("h1");
  h.innerHTML = "My Book List";
var book = document.querySelector("div.favoriteBooks");
book.appendChild(h);


for (var i = 0; i < 6; i++) {
    var T = books[i].title;

    var author1 = books[i].author;
    
    var k = document.createElement("p");
    k.innerHTML = (T + ", by " + author1);
    document.body.appendChild(k);
}
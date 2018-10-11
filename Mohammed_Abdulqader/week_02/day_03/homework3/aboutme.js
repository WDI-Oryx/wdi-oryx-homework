
document.body.style.fontFamily="Arial, sans-serif";
var nickname = document.querySelector("#nickname");
nickname.innerHTML="triplem";

var favAnimal = document.querySelector("#favorite");
favAnimal.innerHTML="football";

var hometown = document.querySelector("#hometown");
hometown.innerHTML="Al-maddinah";

var list = document.querySelectorAll("li");
for(var i=0;i<list.length;i += 1)
{
    var currentList = list[i];
    currentList.setAttribute("class", "listitem");
    currentList.style.color="rebeccapurple";
}

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

var imger = document.createElement("img");
img.setAttribute("src" , "image/mmm.jpg");
imger.style.width="200px";
imger.style.height="200px";
var div = document.querySelector(".profilePicture");
div.appendChild(imger);

var hTag = document.querySelector("h1");
hTag.innerText="My Book List";

for (var i =0;i<books.length;i +=1)
{
    var pTag = document.createElement("p");
    var curr = books[i]
    pTag.innerText=curr.title + ", by "+ curr.author; ;
    document.body.appendChild(pTag);
}

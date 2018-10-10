document.querySelector("html").style.fontFamily = "Arial, sans-serif";
document.querySelector("#nickname").innerHTML = "ALOIZ";
document.querySelector("#favorite").innerHTML = "Dodgerblue";
document.querySelector("#hometown").innerHTML = "The best city Khobar";

var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
	lis[i].classList.add("listitem");
	lis[i].style.color = "rebeccapurple";
}

var newImg = document.createElement("img");
newImg.style.width = "250px";
newImg.setAttribute(
	"src",
	"https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/15219413_1810114345868515_952603219461661433_n.jpg?_nc_cat=104&oh=d02cba02fcc9bd54bcfcac6349a65ae5&oe=5C1CA9FE"
);

document.querySelector(".profilePicture").appendChild(newImg);

// -------- Part Two ---------- //

var books = [
	{
		title: "The Design of Everyday Things",
		author: "Don Norman",
        alreadyRead: false,
        url: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
	},
	{
		title: "The Most Human Human",
		author: "Brian Christian",
        alreadyRead: true,
        url: "https://images.gr-assets.com/books/1295465264l/8884400.jpg"
	},
	{
		title: "In Search of Lost Time",
		author: "Marcel Proust",
        alreadyRead: true,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCr9uNuPEA71OyflKFI_ciZ90nT9r8JSnxmUtdJeaYGul3_-YVA"
	},
	{
		title: "Ulysses",
		author: "James Joyce",
        alreadyRead: true,
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg"
	},
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
        alreadyRead: true,
        url: "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SX326_BO1,204,203,200_.jpg"
	}
];

var newEl = document.createElement("h1");
newEl.innerHTML = "My Book List";

document.querySelector(".favoriteBooks").appendChild(newEl);

var ul = document.createElement("ul");
for (let i = 0; i < books.length; i++) {
    var li = document.createElement("li");
    
    var img = document.createElement("img");
    img.setAttribute("src", books[i].url);
    img.style.width = "100px";
    li.appendChild(img);

    var p = document.createElement("p");
    p.innerHTML = books[i].title + ", by " + books[i].author;
    p.style.display = "inline-block";
    li.appendChild(p);

    if(books[i].alreadyRead)
        p.style.color = "red";

    ul.appendChild(li);
}
document.body.appendChild(ul);
document.body.style.fontFamily = 'Arial, sans-serif';

var allSpanItems = document.querySelectorAll('span');

allSpanItems[0].innerText = 'Douni';
allSpanItems[1].innerText = 'Penguin';
allSpanItems[2].innerText = 'Riyadh';

var allListItems = document.querySelectorAll('li');
for (var i =0; i<allListItems.length;i++){
var currentItem = allListItems[i];
currentItem.setAttribute('class','listitem');
currentItem.style.color = 'rebeccapurple';
}


var newImg = document.createElement('img');
newImg.setAttribute('src','https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock-511366776.jpg?itok=cWhdWNZ8&resize=1100x1100');
newImg.setAttribute('width','500');
newImg.setAttribute('height','300');
var newDiv = document.querySelector(".profilePicture");
newDiv.appendChild(newImg);


var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      cover: "https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L._SX316_BO1,204,203,200_.gif"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: false,
      cover: "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo%2BQL.jpg"
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: false,
      cover: "https://images.penguinrandomhouse.com/cover/9780679645689"
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      cover:"http://t1.gstatic.com/images?q=tbn:ANd9GcTDfNTF8TmBBlAxY3eMOYsClw7kjR2XhPtluXEtr8aewge9ZoMt"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      cover: "http://t3.gstatic.com/images?q=tbn:ANd9GcTjepWW7Bln6Vg75oDmCttX6VN-x_B34DV27iT9Kb4EVj_85znd",
    }
  ];

  var newHeader = document.createElement('h1');
  newHeader.innerText = 'My Book List';
  var bookDiv = document.querySelector(".favoriteBooks");
  bookDiv.appendChild(newHeader);
  
  for (var i =0;i<books.length;i++) {
      var bookTitle = books[i].title;
      var bookAuthor = books[i].author;
      var bookStatus = books[i].alreadyRead;
      var bookCover = books[i].cover;
      var newBook = document.createElement('li');
      newBook.innerText = bookTitle+", by "+bookAuthor;
      if (bookStatus) {
          newBook.style.color = "red";
      }
      newBook.innerHTML += '<br> <img src="'+bookCover+'" height="100" width="70"> <br>';      
      var bookDiv = document.querySelector(".favoriteBooks");
      bookDiv.appendChild(newBook);
  }
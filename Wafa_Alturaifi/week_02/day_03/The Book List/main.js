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

  var newhading = document.createElement("h1");
  newhading.inenerText="My Book List";

  function favoriteBooks () {
    for( var i=0; i<books.length ; i++){
    var newpragraph=books[i];
   console.log(newpragraph.title);
   console.log(newpragraph.author);
    }
  }
 // document.body.appendChild(newpragraph)
  favoriteBooks();
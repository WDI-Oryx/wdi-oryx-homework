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

  // Create an h1 with text
  var pageTitle = document.createElement("h1");
  pageTitle.innerHTML = "My Book List";
  document.querySelector(".favoriteBooks").appendChild(pageTitle);

  // create a p tag with the book title and author for each book in the array
  for (var i = 0; i < books.length; i++) {
      var paragraph = document.createElement("p");
      paragraph.innerHTML = books[i].title + ", by " + books[i].author;
      document.body.appendChild(paragraph);
  }
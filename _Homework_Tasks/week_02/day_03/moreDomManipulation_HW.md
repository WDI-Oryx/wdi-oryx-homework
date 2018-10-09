# Exercises: More DOM Manipulation

## About Me

Every webpage needs an "About Me" section.

Start with this HTML and save it as "aboutme.html":

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>More DOM Manipulation</title>
</head>

<body>

  <h1>About Me</h1>

  <div class="profilePicture"></div>

  <ul>
    <li>Nickname: <span id="nickname"></span></li>
    <li>Favorite Animal: <span id="favorite"></span></li>
    <li>Hometown: <span id="hometown"></span></li>
  </ul>

  <div class="favoriteBooks"></div>

</body>

</html>
```

- Create a JavaScript file, and link it up
- Using JavaScript:

  - Change the font-family of the page to `"Arial, sans-serif"`
  - Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
  - Give each `li` the class of `"listitem"`
  - Change each `li`'s text color to `"rebeccapurple"`
  - Create a new `img` element and set its `src` attribute to a picture of you. Put that new `img` element in the div with the class of `"profilePicture"`

## The Book List

Keep track of which books you read and which books you want to read!

Copy this data into your JavaScript file:

```js
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
```

- In your JavaScript file:
  - Create an `h1` with the text of "My Book List", and put it inside `div.favoriteBooks`
  - Iterate through the array of books. For each book, create a `p` tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

### Bonus

- Turn the books into an unordered list filled with list items
- Add a property to each book with a URL of the book cover image. For each book, add an `img` element for each book on the page
- Change the style of the book depending on whether you have read it or not (e.g. make the text color red if you have read it)

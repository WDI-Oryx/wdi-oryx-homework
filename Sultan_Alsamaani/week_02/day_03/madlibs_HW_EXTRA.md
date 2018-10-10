# Exercises: Events

## Mad Libs

Start with this webpage, which has several input elements and a button:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mad Libs</title>
</head>

<body>

  <h1>Mad Libs</h1>

  <ul>
    <li>Noun: <input type="text" id="noun">
    <li>Adjective: <input type="text" id="adjective">
    <li>Someone's Name: <input type="text" id="person">
  </ul>

  <button id="lib-button">Lib it!</button>

  <div id="story"></div>

</body>

</html>
```

- Create a new JavaScript file, and link it to the page with a script tag at the bottom
- Create a function called `makeMadLib`

  - Retrieve the current values of the inputs on the page
  - Combine them to make a story (e.g. `"NAME really likes ADJECTIVE NOUN"`)
  - Once you have created the story, set `div#story`'s text to be that story

## Basic Analytics

On the same page, add some basic analytics

- Whenever the user moves the mouse, log out the current `X` and `Y` coordinates of the mouse

### Analytics Bonus!

Create a `div` that is 10px wide and 10px high. Set the background color to `"rebeccapurple"`.

Using the mouse `X` and `Y` coordinates from before and the `position` CSS property, get the `div` that you just created to follow the mouse

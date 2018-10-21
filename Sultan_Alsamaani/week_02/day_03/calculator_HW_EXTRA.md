# Calculator

Start with this webpage, which has inputs and buttons for things to calculate:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Calculator</title>
</head>

<body>

  <div class="half">
    <label>
      Half this number:
      <input type="number" id="half-input" size="2">
    </label>
    <button id="half-button">Calculate</button>
  </div>

  <div class="percent">
    <label>
      Fraction:
      <input type="number" id="percent1-input" size="2">
    </label>
    <label>
      Whole:
      <input type="number" id="percent2-input" size="2">
    </label>
    <button id="percent-button">Calculate</button>
  </div>

  <div class="area">
    <label>
      Calculate area of circle with radius:
      <input type="number" id="area-input" size="2">
    </label>
    <button id="area-button">Calculate</button>
  </div>

  <div id="solution"></div>

</body>

</html>
```

- Create a new JavaScript file, link it by adding a script tag at the bottom of the body tag
- For each operation, create an event listener for the button, and whenever it is clicked:

  - Find the value of the appropriate inputs
  - Show the result of the calculation in `div#solution`

- Bonus: respond to key presses so that the user doesn't have to click the button.

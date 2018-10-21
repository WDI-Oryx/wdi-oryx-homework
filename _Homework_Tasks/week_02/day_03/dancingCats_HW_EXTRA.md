# Exercises: Animation

## The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>

  <img src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

</body>

</html>
```

- Create a new JavaScript file and link to it with a script tag at the bottom
- Create a variable to store a reference to the img
- Change the style of the `img`
  - Set `position` to `absolute`
  - Set `left` to `0px`
- Create a function called `catWalk()` that moves the cat 10 pixels to the right of where it started, by changing the `left` style property
- Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

## Bonuses

### Bonus 1

When the cat reaches the right-hand side of the screen, move the cat back to the left-hand side ("0px"). So that cat should keep walking from left to right across the screen, forever and ever.

### Bonus 2

When the cat reaches the right-hand of the screen, make them move backwards towards the left instead (try flipping the cat around with CSS, too). The cat should keep walking back and forth forever and ever.

### Bonus 3

When the cat reaches the middle of the screen, replace the img with an image of a cat dancing. Keep it dancing for 10 seconds, and then replace the img with the original image and have it continue to walk.

### Bonus 4

Go crazy! Do whatever you want. Add music, more images, animations - whatever you'd like!

## Some Inspiration

- [Example 1](http://reenarajani.github.io/myGitPages/CatProgram/)
- [Example 2](http://harrisdm.github.io/Dancing_Cat/)
- [Example 3](http://rodneyss.github.io/walkcat/)
- [Example 4](http://charliegerard.github.io/dancingcats/)

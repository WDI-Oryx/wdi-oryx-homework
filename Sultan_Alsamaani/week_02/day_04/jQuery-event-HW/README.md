![](https://i.imgur.com/gXRzAcl.gif)

# Game of Zones

When you play the Game of Zones, you win, or ... well you don't die but you might not win. We're going to be building some interactive games using our new knowledge of EVENTS, compounding our previous knowledge of functions and JavaScript fundamentals.

## Setup

You've been provided starter code - no need to edit `index.html` or `style.css`, work only in `starter1.js` for Game 1 and `starter2.js` for Game 2.

Before coding, look through both games and their notes. Be sure to spend at least 15 minutes thinking about how to build a game out before actually touching ANY code. Even if your pseudocode isn't perfect, it breaks down the problem into smaller steps to tackle and gives you a roadmap of how to proceed.

## Completion

There are two games below and a bonus section. Complete both games for full credit. We want to stress the importance of formatting and spacing your code neatly and consistently. At some point in time we have all written some pretty ugly looking code that didn't follow any convention, but now is a good chance to start tidying up our code. Please read through [Airbnb's style guide](https://github.com/airbnb/javascript).

## Assignment

#### Game 1

What should a user be able to do with the game?

1. When the mouse enters any of the zones change its background color to `green`
2. When the mouse leaves a zone change its background color back
3. When you click on a zone it locks its color to green.
>HINT: You probably need to remove some event listeners ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener))
4. When all zones are checked green, log a statement of congratulations to the console!

**Before coding anything, PSEUDOCODE out how to approach this game.** Here are some useful questions and notes for you:

- let's build a function that will turn a zone green. Can we do this with one function that will change any object with the function bound to it via an eventListener?
- conversely, you might need a function that will change the background of the zone to clear or white or none
- take a look at `style.css`, we already have styles for a class 'green'. How might this change how you build the functions?
- what kind of event listeners do we need? Is there documentation out there for different types of event listeners?
- how would you add an event listener to one DOM element? How about to all DOM elements of a set (e.g. with the same class)
- how can you remove event listeners?
- which event listeners should be removed?
- when should those event listeners be removed?
- how can you check to see if all the zones are green?
- if you wrote a function to perform that check, when should the check occur?

![](https://i.imgur.com/BvvVElS.png)

#### Game 2

Modify your previous game so that the zones need to be clicked in a particular order. Copy any code you might want to reuse from Game 1 into `starter2.js`, and in `index.html`, switch `starter2.js` to be connected and `starter1.js` to be commented out.

1. Generate an array with the numbers `['zone-1', 'zone-2', 'zone-3', 'zone-4']` in a random order - you do not need some shuffling function, just randomize it by hand. This will determine the order in which you need to click the zones.
2. The zones start with no background color.
3. When you hover over a zone it should turn green if it is the next one that needs to be clicked and turn red if it is not.
4. When a correct zone is clicked it should stay green
5. Clicking on an incorrect zone should do nothing.
6. When all zones are green, log a statement of congratulations to the console!

**Before coding anything, PSEUDOCODE out how to approach this game.** Here are some new, useful questions and notes for you:

- what can we reuse from the previous game?
- how can we check if the zone is supposed the next one in the array?
- how can we stop something from happening if we only want an event to occur for a correct click?


## Bonus

Let's revisit both games!

#### Game 1

- When all zones are checked green make them turn yellow after one second, red after another second, and then clear the background color after one last second.
>HINT: Look at [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

#### Game 2

- Clicking an incorrect box should make it turn red for one second, then revert back to clear
- When all zones are green remove their backgrounds one by one, with a 1 second delay in between each, in the order that they were clicked
>hint: Look at [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)!

## Submission

The assignment is due at 11:59PM tonight! As usual remember to git add, git commit, and git push to your repos. Create an issue ticket on the original repo. Remember to include a link to your repo and follow the [Homework Guide](https://git.generalassemb.ly/wdi-nyc-5-22/course-information/blob/master/homework-policy.md)!

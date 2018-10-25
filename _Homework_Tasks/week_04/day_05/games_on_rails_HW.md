# Games on Rails

Games on Rails is a full-stack web application with three games.

- Rock, Paper, Scissors
- Magic 8 Ball
- Secret Number

## Rock, Paper, Scissors

Requests to http://localhost:3000/games/rps/rock (this should also work for paper and scissors!) should load the Games controller, and run the `rps` method.

When the controller handles this request, get Rails to generate a random go (rock, paper or scissors), and compare it to the user's guess. Show the result in the view!

## Magic 8 Ball

Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.

The URL should look something like http://localhost:3000/games/magic/Some-question-here, and should respond (through the view) based on the rules found [here](https://en.wikipedia.org/wiki/Magic_8-Ball).

## Secret Number

Users click a number between 1 and 10. The controller validates the guess, compares it to the computer's guess and renders the **win or lose view** (these are two separate HTML pages!).

## Bonus

- Style your Rails app
- Use `application.html.erb` to make it easy to navigate your app
- Have a look at `session` in Rails, and see if you can use it to your advantage in this app
- For Magic 8 Ball, make it so the user can type in the question in a form!

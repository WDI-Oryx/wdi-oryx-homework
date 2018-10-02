# Exercises: Functions

These exercises are based on the variables exercises, so you may start from your solutions or start from scratch.

## Driving Age

- Write a function that receives a `userAge` called `canDrive`
- If the received age is less than 18, print "Sorry, you can't drive yet"
- If the received age is equal to or over 18, print "Drive away!"
- Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"

## The World Translator

Write a function called `translator` that receives a language (e.g. "fr", "eng" etc.). Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "french" - log "Bonjour le monde" etc.)

Note that if you think the data would be best stored in another way (i.e. using arrays or objects) - go right ahead! e.g. the World Translator might have some data that looks like this:

```js
var translations = {
  english: "Hello World",
  french: "Bonjour le Monde",
  arabic: "مرحبا بالعالم"
  // ...
};
```

## The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named `tellFortune` that:

- Takes 4 arguments: number of children, partner's name, geographic location, job title.
- Outputs your fortune to the screen like so: `"You will be a X in Y, and married to Z with N kids."`
- Call that function 3 times with 3 different values for the arguments.

## The Age Calculator

Forgot how old you are? Calculate it!

Write a function named `calculateAge` that:

- Takes 2 arguments: birth year, current year.
- Calculates the 2 possible ages based on those years.
- Outputs the result to the screen like so: `"You are either NN or NN"`
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

## The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named `calculateSupply` that:

- Takes 2 arguments: age, amount per day.
- Calculates the amount consumed for rest of the life (based on a constant max age).
- Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.

## The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called `calcCircumference`:

- Pass the radius to the function.
- Calculate the circumference based on the radius, and output `"The circumference is NN"`.

Create a function called `calcArea`:

- Pass the radius to the function.
- Calculate the area based on the radius, and output `"The area is NN"`.

## The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Create a function called `celsiusToFahrenheit`:

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output `"NN°C is NN°F"`.

Create a function called `fahrenheitToCelsius`:

- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output `"NN°F is NN°C."`

## The Rest

Turn any of the other exercises [here](../day_02/Conditionals_LAB.md) into functions!

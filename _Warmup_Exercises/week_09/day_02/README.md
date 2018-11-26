

![](https://i.imgflip.com/17ymwy.jpg)

# Parsing JSON

## Morning Exercise

Complete each step. We will go over this assignment at 9:52.

## Part 1

1. Spend 10 minutes or so reading this documentation on JSON.
    - [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

2. JSON is essentially a Javascript Object that contains an Array of Objects. It is one of the most common ways data is stored and retrieved using AJAX. Ex:

``` js
let data = {
  "users": [
      {
        "name": "Sami"
      },
      {
        "name": "Noura"
      }
  ] // ends users array
} // ends data Object
```

Quick review of what we see here:
In the above example, `let data` is the JSON object. This object has one key-value pair: key - `"users"`, value - an array of objects.

Each object inside of the `users` array is an individual user, with its own property `"name"`,


The following JSON object has been provided to you in `script.js`:
``` js
let data =  {
  	"people": [
        {
    		"name": "Luke Skywalker",
    		"height": "172",
    		"mass": "77",
    		"hair_color": "blond",
    		"skin_color": "fair",
    		"eye_color": "blue",
    		"birth_year": "19BBY",
    		"gender": "male"
    	}, {
    		"name": "C-3PO",
    		"height": "167",
    		"mass": "75",
    		"hair_color": "n/a",
    		"skin_color": "gold",
    		"eye_color": "yellow",
    		"birth_year": "112BBY",
    		"gender": "n/a"
    	}, {
    		"name": "R2-D2",
    		"height": "96",
    		"mass": "32",
    		"hair_color": "n/a",
    		"skin_color": "white, blue",
    		"eye_color": "red",
    		"birth_year": "33BBY",
    		"gender": "n/a"
    	}, {
    		"name": "Darth Vader",
    		"height": "202",
    		"mass": "136",
    		"hair_color": "none",
    		"skin_color": "white",
    		"eye_color": "yellow",
    		"birth_year": "41.9BBY",
    		"gender": "male"
    	}, {
    		"name": "Leia Organa",
    		"height": "150",
    		"mass": "49",
    		"hair_color": "brown",
    		"skin_color": "light",
    		"eye_color": "brown",
    		"birth_year": "19BBY",
    		"gender": "female"
  	  }
    ] // ends people array
  } // ends data json object
```
Just like in the previous example, this JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.

## Part 2
Create a `main.js` file and write the following functions


1. Write a function that console.logs each character object in the data.
``` js
let logData = function() {
}
```
2. Write a function that console.logs each character's name
``` js
let logNames = function() {
};
```
3. Write a function that console.logs each character's name and eye color
``` js
let logNameEyes = function() {
};
```
4. Write a function that console.logs each character's name whose mass is greater than 75
``` js
let logByMass = function() {
};
```
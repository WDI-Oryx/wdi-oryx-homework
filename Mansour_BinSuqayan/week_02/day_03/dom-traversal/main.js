// Select the h1
var heading = document.querySelector("h1");
console.log(heading);

// Select the paragraph
var paragraph = document.querySelector("p");
console.log(paragraph);

// Select the img with a class selector
var image = document.querySelector(".bill");
console.log(image);

var firstListItem = document.querySelector("li");
var secondListItem = document.querySelector("li#second");

// document.querySelectorAll("CSS Selector")

var allListItems = document.querySelectorAll("li");
console.log(allListItems); // => NodeList

var allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

console.clear();

// el.getAttribute( "ATTRIBUTE NAME" );
var img = document.querySelector("img");

var src = img.getAttribute("src");
console.log(src);

var alt = img.getAttribute("alt");
console.log(alt);

// Find the a tag, and log out the "href" attribute
var aTag = document.querySelector("a");
var href = aTag.getAttribute("href");
console.log(href);

// el.setAttribute( "ATTRIBUTE NAME", "DESIRED VALUE" );

var img = document.querySelector("img");
var currentSrc = img.getAttribute("src");
img.setAttribute("src", "https://placecage.com/400/400");

// Find the a tag
var aTag = document.querySelector("a");

// Change the href to https://google.com.sa
aTag.setAttribute("href", "https://google.com.sa");

// Log out the new href (using getAttribute)
var newHref = aTag.getAttribute("href");
console.log(newHref);

// Try setting the target attribute to be "_blank"
aTag.setAttribute("target", "_blank");

// .innerText

// Find the h1
var heading = document.querySelector("h1");

// Log out the current text of h1
console.log(heading.innerText);

// Change the h1's text to "Changed by JS"
heading.innerText = "Changed by JS";

// Append "!!!" to the h1
heading.innerText += "!!!";

// Select the a tag
var aTag = document.querySelector("a");

// Print out the a tag's current HTML
console.log(aTag.innerHTML);

// Change the HTML of the a tag to be "This is a <h1>link</h1>"
aTag.innerHTML = "This is a <h2>Link</h2>";

// Add some "!!!" at the end of the HTML too
aTag.innerHTML += "!!!";

// Bonus: Print out the ul's innerText and the ul's innerHTML
var unorderedList = document.querySelector("ul");
console.log(unorderedList.innerText);
console.log(unorderedList.innerHTML);




// input .value 
var input = document.querySelector("input");
var currentValue = input.value;
console.log(currentValue);
input.value = "HELLO FROM JS";

// this is only for form-related


//find the a tag 


//Get all the current styles for the a tag 

//log out the text color ,display,font size , and the text decoration 
//of the a tag

// find the image 

// log out the border , width , height and border-radius properties

// Find the a tag
var aTag = document.querySelector("a");

// Get all of the current styles for the a tag
var aTagStyles = getComputedStyle(aTag);

// Log out the text color, display, font size, and text decoration of the a tag
console.log(aTagStyles.color);
console.log(aTagStyles.display);
console.log(aTagStyles.fontSize);
console.log(aTagStyles.textDecoration);

// Find the image
var image = document.querySelector("img");

// Log out the border, width, height and border-radius properties
var imageStyles = getComputedStyle(image);
console.log(imageStyles.border);
console.log(imageStyles.width);
console.log(imageStyles.height);
console.log(imageStyles.borderRadius)


// Change the following styles on the h1:
//   color to be hotpink
//   background to be green
//   font-size to be "100px"

// Change the following styles on the img:
//   Set the width to be 200px
//   Set the height to be 400px
//   Set the border to be 5px solid black```

console.clear();
var alllistItems = document.querySelectorAll("li");

for ( var i = 0; i < alllistItems.length; i++ ){
    var currentItem = allListItems[i];
 currentItem.innerHTML += "!!!";
 if (i %2 === 0)

 currentItem.style.color ="rebeccapurple";
}


console.clear();
var newH = document.createElement("h1");
var targetDiv = document.querySelector("div.dynamic");
targetDiv.innerText = "Created by JS with append";
targetDiv.appendChild(newH);


var newImg =document.createElement("img");

newImg.setAttribute("src", "http://www.fillmurray.com/");
newImg


var tweet = "This is a tweet";
var author = "twitterUser42";

var content = tweet + ", posted by " + author;

var newParagraph = document.createElement("p");

newParagraph.innerText = content;
newParagraph.style.color = "blue";

var newTweetsDiv = document.querySelector(".newTweets");
newTweetsDiv.appendChild(newParagraph);

// Create a new "a" tag
var newLink = document.createElement("a");

// Set the text to "This is a link to Google"
newLink.innerText = "This is a link to Google";

// Set the font color to be "hotpink"
newLink.style.color = "hotpink";

// Set the "href" to be "https://google.com.sa"
newLink.setAttribute("href", "https://google.com.sa");

// Put it at the end of the body tag
document.body.appendChild(newLink);



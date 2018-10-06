// Fortune Teller
function fortune() {
var numOfChildren = [1, 4, 3];
var  partnerName = [null, null, null];
var geographicLocation= [null, null, null];
var jobTitle = [null, null, null];
var randomChildren = Math.floor(Math.random() * (numOfChildren.length));
    console.log("you will have  " + randomChildren + "children ");
}
fortune;


// Age calculator 
var currentYear = now.getFullYear()/* this methode was working to import the current year
                                   // until I moved it up into the line 13 got an error! */
var yearOfBirth = null;
var calculateAge = function(currentYear, yearOfBirth){
var age = currentYear - yearOfBirth ;
console.log(age) ;
}
calculateAge;

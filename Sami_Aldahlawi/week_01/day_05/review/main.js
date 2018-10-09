// console.log("Js connecting");

// //creationg 
//  // Use array Literals 
//  // Inherit properites and methods

//  var emptyArray = [];
//  var letters = ["s","a","m","i"];


//  console.table(letters);

//  var obj = {
//      name:"smai",
//      age:22
//  }

//  console.clear();
//  console.table(obj);
//  obj.job = undefined;
// obj.job = undefined;

// console.table(obj);
// console.clear();

// var explorer = {
//     name: {
//         first:  "Jacques",
//         last:   "Cousteau"
//     }
// };


// var firstName = explorer.name.first;
// var lastName = firstName + " " + explorer.name.last;
// console.log(lastName);




// var todayClass = {
//     weekNumber: 1,
//     dayNumber: 5,
//     topices:["Objects","Scope","Hoisting","Callbacks"]
// };

// var tweets = [
//     { username: "billy", message: "Hi there, my first tweet" },
//     { username: "threequal", message: "Something something nerdy" },
//     { username: "meshoalmosallam", message: "I have 0 tweets" }
// ];


// var aaa = 10;
// function h(){
//     var aaa = 20;
//     console.log(aaa);
// }



// h();
  
  
// console.clear();







// function sayHello(name){
//     var greeting = "Hello " + name;

//     console.log(greeting);
// }

// sayHello("Sami");



// var user = {
//     firstname: "Jacques",
//     LastName: "Cousteau"
// };

// function dis(user){
//     console.log(user);
// }


// //setTimeout(sayHello("Sami"),1000);
// setInterval(dis("jjs"),1000);




// function repeat(times,myCallback){
    
//     for(var i =1; i <= times ; i++){
//         myCallback(i)
//     }
// }


// repeat(5,function() {
//     dis("snskns")
// });

function fun(name){
    var bb = name || "NO NAME HERE";
    console.log("Hello " + fun.b.name);
}


fun.b = {
    name:"Afnan"
};
fun();

console.log();
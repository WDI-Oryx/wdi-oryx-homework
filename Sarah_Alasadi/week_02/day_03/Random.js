/*

b = document.querySelector("#randomize");
//var myPix = new Array("file:///C:/Users/saraf/wdi/wdi-oryx-homework/Sarah_Alasadi/week_02/day_03/image/1.jpeg",
"file:///C:/Users/saraf/wdi/wdi-oryx-homework/Sarah_Alasadi/week_02/day_03/image/2.jpeg",
"file:///C:/Users/saraf/wdi/wdi-oryx-homework/Sarah_Alasadi/week_02/day_03/image/3.jpeg",
"file:///C:/Users/saraf/wdi/wdi-oryx-homework/Sarah_Alasadi/week_02/day_03/image/4.jpeg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);

     document.getElementById("myPicture").src = myPix[randomNum];
}
b.addEventListener("click", choosePic); 
*/

var b = document.querySelector("#randomize");
 function displayImage() {

     var image = document.createElement("img");
           image.setAttribute("src","https://source.unsplash.com/random");
    document.body.appendChild(image);
   
   
}
 b.addEventListener("click", displayImage); 




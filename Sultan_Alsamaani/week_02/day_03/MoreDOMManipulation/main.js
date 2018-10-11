// - Change the font-family of the page to `"Arial, sans-serif"`
//   - Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
//   - Give each `li` the class of `"listitem"`
//   - Change each `li`'s text color to `"rebeccapurple"`
//   - Create a new `img` element and set its `src` attribute to a picture of you. Put that new `img` element in the div with the class of `"profilePicture"`
document.body.style.fontFamily = "Arial, sans-serif";
/* <ul>
    <li>Nickname: <span id="nickname"></span></li>
    <li>Favorite Animal: <span id="favorite"></span></li>
    <li>Hometown: <span id="hometown"></span></li>
  </ul> */
  function exe()
  {
document.querySelector("span#nickname").innerHTML = "abo yasser";
document.querySelector("span#favorite").innerHTML = "none";
document.querySelector("span#hometown").innerHTML = "qassim";
var lists = document.querySelectorAll("li");
debugger;
for(var i=0;i<lists.length;i++){
    lists[i].classList ="listitem";
    lists[i].style.color ="rebeccapurple";
}
// for(var list in lists){
//     lists[list].classList ="listitem";
//     lists[list].style.color ="rebeccapurple";
// }
var image = document.createElement("img");
image.setAttribute("src","sultan.jpg");
document.querySelector("div.profilePicture").appendChild(image);
}
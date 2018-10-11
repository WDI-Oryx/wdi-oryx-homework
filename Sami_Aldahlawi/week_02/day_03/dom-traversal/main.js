var newA = document.createElement("a");
newA.innerText = "This is  a link to Google";
newA.style.color = "hotpink"



setTimeout(function(){newA.setAttribute("href","https://google.com");},1000);
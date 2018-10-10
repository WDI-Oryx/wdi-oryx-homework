document.querySelector("#lib-button").addEventListener("click", makeMadLib);
function makeMadLib(){
    var inputs = {
        noun: document.querySelector("#noun").value,
        adj: document.querySelector("#adjective").value,
        name: document.querySelector("#person").value
    }
    if(inputs.adj === "" || inputs.name === "" || inputs.noun === "") return;
    var result = `${inputs.name} really likes ${inputs.adj} ${inputs.noun}`;
    document.querySelector("#story").innerHTML = result;
}

document.body.addEventListener("mousemove", analize);
function analize(e){
    var x = e.clientX, y = e.clientY;
    var result = `X: ${x}, Y: ${y}`;
    document.querySelector("#analytics").innerHTML = result;
    var box = document.querySelector("#mouse-follow");
    box.style.top = y + "px";
    box.style.left = x + "px";
}
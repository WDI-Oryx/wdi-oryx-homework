 var allBox = document.querySelectorAll(".element");
 var count = 0;
 var playerX = 0;
 var playerO = 0;

 var playerOne = document.querySelector("#playerOne");
 var playTwo = document.querySelector("#playerTwo");
 
 function  plusEvent(numOne){
    count = 0;
    for (var i = 0; i < numOne.length ; i++ ){
        numOne[i].setAttribute("class","element");
        numOne[i].addEventListener("click",changeBox);
    }
 }

 function  deleteEvent(arrName ){
     for ( var i = 0 ; i < arrName.length ; i++ ){
          arrName[i].removeEventListener("click",changeBox);
     }

 }



function changeBox (event){
    count++;
    if ( count%2 == 0){
        this.classList.add("xPhoto");

    } else {
        this.classList.add("oPhoto");
    }
    this.removeEventListener("click",changeBox);
    whoIsWinner(allBox);
    
}


function whoIsWinner (boxes){
    var winningWays =[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    var xWinner = [false,false,false];
    var oWinner = [false,false,false];
    for ( var i = 0; i < winningWays.length ; i++){
      for(var j = 0 ; j < winningWays[i].length ; j++){
       // console.log(boxes[winningWays[i][j]]);
        if (boxes[winningWays[i][j]].classList.contains("xPhoto")){
            xWinner[j] = true;
        }else if(boxes[winningWays[i][j]].classList.contains("oPhoto")){
            oWinner[j] = true;
        }
      }
      if(xWinner[0] == true && xWinner[1] == true && xWinner[2] == true){
        //X current 
        console.log("X is winner");
        playerX +=1;
        playerOne.innerText = playerX;
        setTimeout(function (){plusEvent(allBox)},1000);
        deleteEvent(allBox);
      }else if(oWinner[0] == true && oWinner[1] == true && oWinner[2] == true){
       //Current o
        console.log("O is winner");
        playerO +=1;
        playerTwo.innerText = playerO;
       setTimeout(function (){plusEvent(allBox)},1000);
       deleteEvent(allBox);
      }else if(count == 9){
        setTimeout(function (){plusEvent(allBox)},1000);
      }
      xWinner = [false,false,false];
      oWinner = [false,false,false];
  }
}

plusEvent(allBox);
var lines ={
   'N' : ["Time aquare","34","28th","23rd","Union Square","8th"],
 'L' : ["8th","6th","Union Square", "3rd","1st"],
  'six' : ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
}


function getLineArray(key){

    return lines[key];
}

function getTripString(line,startStop,endStop){
var lineArray = getLineArray(line);
var startIndex = lineArray.indexOf(startStop);
var endIndex = lineArray.indexOf(endStop);


var stopString = "";
for(var i = startIndex; i <= endIndex; i++){
    stopString += lineArray[i] + ',';
}
return stopString;
}

function planTrip(startLine, startStop,endLine,endStop){
    if (startLine === endLine){
        console.log('you must travel on the following stops on the '+ startLine+' line: '+getTripString(startLine,startStop,endStop));
    }

}
planTrip("N","Union Square","N","Times Square");













/*

var stop = "Union Square";
function trainPlane(L1,start,L2,end){
    if (L1 === 'N'){
        return N;
    } else if (L1 === 'L'){
        return L;
    }else if (L1 === 'six'){
        return six;
    }
    else if (start === stop){
        return N,L;
    }else if (L2 === N){
        return N;
    }else if (L2 === L){
        return L;
    }else if(L2 === six){
        return six;
    }else if (L1 === L2){
        var E = L2.indexOf(end);
    }else if (L1 === L2){
        var E = L1.indexOf(stop);
        var x = L1.indexOf(start);
    }
  else if (E < x){
        for (var i = E +1; i<=x; i+=1){

        }
         else if (E < x){
        for(var i = E -1; i>=x;i--) {

        }
    } 



    consloe.log(planTrip("N","Union Square","N","Times Square"));

  }
  
    }
*/
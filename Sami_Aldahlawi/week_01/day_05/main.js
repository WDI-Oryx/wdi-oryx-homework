
// init the stations of lines in arrarys
var lineN = ["times square","34th","28th","23rd","union square","8th"];
var lineL = ["8th","6th","union square","3rd","1st"];
var line6 = ["grand central","33rd","28th","23rd","union square","astor place"];

// singleLine to forward and backward line
function singleLine(line,source,destination){
    var path = [];
    if(line.indexOf(source) <= line.indexOf(destination)){ //forward path
        for(var i = 0; i < line.length ; i++){
            if(line[i] === source){
                for(var j = i; j < line.length ; j++){
                    path.push(line[j]);
                    if(line[j] === destination)
                    break;
                }
            }
        }
    }else{                                              //backward path
        for(var i = line.indexOf(source); i >= 0 ; i--){
            if(line[i] === source){
                for(var j = i; j >= 0 ; j--){
                    path.push(line[j]);
                    if(line[j] === destination)
                    break;
                }
            }
        }
    }
    return path;
}

//function multiLine call singleLine twice  
// once for firstline from (source to 'Union Square')  ->
// once for secondline Union ('Union Square' to destination)  ->
//Then merge firstLine with secondLine to become one line -->
function multiLine(lineOne,lineTwo,source,destination){
    var firstPath = [];
    var secondPath = [];
    var path = [];
    firstPath = singleLine(lineOne,source,"union square");
    secondPath = singleLine(lineTwo,"union square",destination);
    path = firstPath.concat(secondPath);
    path.splice(path.indexOf("union square"),1);
    return path; //path.concat(firstPath,secondPath);
}

//function for make new path for request of user
function pathOfTrip(lineOne,source,lineTwo,destination){
    var path = [];
            if(lineOne === lineTwo ){
                if(source === destination) // check if the same line and station
                    return "Sorry, You don't need to use the train because you use single station.";
                else
                    path = singleLine(lineOne,source,destination);
            }else{
                path = multiLine(lineOne,lineTwo,source,destination);
            }
    return path;
}

//This function check if station avalible in line or not
function isStationValid(line,station){
    var isHere = false;
        for(var i = 0; i < line.length ; i++){
            if(line[i] === station)
                isHere = true;
        }
        
    return isHere;
}


//Print path
function printPath(lineOne,lineTwo,trackOfTrain){
    var showWay = "";
    showWay += "You must travel through the following stops on " + lineOne + " line: ";
    for(var i = 1; i < trackOfTrain.length ; i++){
        if(trackOfTrain[i] === "union square" && i !== 0){
            showWay += trackOfTrain[i] + ". \n";
            showWay += "Change at Union Square.\n";
            showWay += "Your journey continues through the following stops on " + lineTwo + " line: ";
            for(var j = i+1; j < trackOfTrain.length ; j++){
                showWay += trackOfTrain[j] + ", ";
            }
            showWay +=   trackOfTrain.length - 1 + " stops in total.";
            break;
        }else{
            showWay += trackOfTrain[i] + " ,";
        }
    }
    return showWay;
}


// Function for planTrip 
// Take four arguments  line1, startStation, line2,endstation
function planTrip(lineOne,source,lineTwo,destination){//,lineTwo,destination
    lineOne     = lineOne.toLowerCase();
    source      = source.toLowerCase();
    lineTwo     = lineTwo.toLowerCase();
    destination = destination.toLowerCase();
    var lines   = [lineOne,lineTwo];
    var newLine = [];

    for(var i = 0; i < lines.length ; i++){
        switch(lines[i]){
            case 'n':lines[i] = lineN;
                break;
            case 'l':lines[i] = lineL;
                break;
            case '6':lines[i] = line6;
                break;
            default:
                return "The \'" + lines[i] + "\' line is invalid";
        }
    }
    
    if(isStationValid(lines[0],source) && isStationValid(lines[1],destination)){
        newLine =  pathOfTrip(lines[0],source,lines[1],destination);
        console.log(printPath(lineOne,lineTwo,newLine));
    }else{
        console.log("Sorry,The stations is invalid");
    }
}



var line1 = prompt("Enter the name of line 1");
var lSource = prompt("Enter the source of line 1");
var line2 = prompt("Enter the name of line2");
var lDestination = prompt("Enter the destination");

planTrip(line1,lSource,line2,lDestination);
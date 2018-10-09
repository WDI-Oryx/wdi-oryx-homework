
var lineN = [,"Times Square","34th", "28th","23rd","US","8th"];
var lineL = ["8th","6th","US","3rd","1st"];
var line6 = ["Grand Central","33rd","28th","23rd","US","Astor place "];
var lineNreverse = ["8th","US","23rd","28th","34th","Times Square"];
var lineLreverse = ["1st","3rd","US","6th","8th"];
var line6reverse = ["Astor place","US","23rd","28th","33rd","Grand Central"];
var mainStop = "US";
 

function whichLine (startPont, destinationn,line){
    if (line === "N" && startPont.indexOf > destinationn.indexOf){
        return lineNreverse;
    } if (line === "N" && startPont.indexOf < destinationn.indexOf){
        return lineN;
    } if((line === "L" && startPont.indexOf > destinationn.indexOf)){
        return lineLreverse;
    } if (line === "L" && startPont.indexOf < destinationn.indexOf){
    return lineL;}
    (line === "6" && startPont.indexOf > destinationn.indexOf){
        return line6reverse;
    } if(line === "6" && startPont.indexOf < destinationn.indexOf){
        return line6;
    }}



//function startTheTrip (line, startPint, finalDestination){
  //  var line = ;
    //var start = ;
    //var destinationn = ; 
//}


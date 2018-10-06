// MTA subway system
console.log("--- MTA Subway System");
var subway = {
    theNLine:["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    theLLine:["8th", "6th", "Union Square","3rd","1st"],
    the6Line:["Grand Central", "33rd","28th", "23rd", "Union Square","Astor Place"]

}; 

function subwaySystem(stops){
    for (var i = 0;i < subwaySystem.length; i+=1){
        if (stops === subway.theNLine){
            console.log("You must travel through the following stops on the N Line:"+subway.theNLine+".");
            if (subway.theNLine.includes("Union Square")){
                console.log("Change at Union Square.");
                 }  
        } 
    else if (stops === subway.theLLine) {
            console.log("You must travel through the following stops on the L Line:"+subway.theLLine+".");
            if (subway.theLLine.includes("Union Square")){
                console.log("Change at Union Square.");
                 }  
                
        }else if (stops === subway.the6Line) {
            console.log("You must travel through the following stops on the 6 Line:"+subway.the6Line+".");

        }
    }
}

subwaySystem(subway.theLLine);

///////////////PLEASE SHOW ME HOW TO DO THIS PROJECT//////////////

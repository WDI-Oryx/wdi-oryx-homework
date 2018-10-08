


//arays for the 3 lines
var nLine = ["Times Square","34th-n","28th-n","23rd-n","Union Square","8th-n"];
var lLine = ["8th-l","6th-l","Union Square","3rd-l","1st-l"];
var sLine =["Grand Central","33rd-s","28th-s","23rd-s","Union Square","Astor Place"];

//function to loop forword or backword throw an array
function pathArray(start ,end,myarray){
    var path =[];
    if (start < end){
 // moveforword
        for (var i =start;i <= end;i++){
            path.push(myarray[i]);
            
        }}
//move backword
        else if (start>end){ 
        for (var i = start;i>=end;i--){
            path.push(myarray[i]);
}
}
  return path; 
}
  //function to find the index and which line for the inputs 
  function findIndex(startEle , endEle){
    var indexOfStart ;
    var indexOfEnd ;
    var startLine;
    var endLine;
    for (var i =0;i <= 7;i++){
        if (startEle === nLine[i]){
        indexOfStart =i;
        startLine = "n";
        //console.log("start element",indexOfStart);
    } if (endEle === nLine[i]){
        indexOfEnd =i;
        endLine = "n";
       // console.log("end element",indexOfEnd);
    }
    if (startEle === lLine[i]){
        indexOfStart =i;
        startLine = "l";
       // console.log("star element2",indexOfStart);
        
    }
    if (endEle === lLine[i]){
        indexOfEnd =i;
        endLine = "l";
       // console.log("end element2",indexOfEnd);
    } 
    if (startEle == sLine[i]){
        indexOfStart =i;
        startLine = "s";
       // console.log("star element3",indexOfStart);
    }
    if (endEle == sLine[i]){
        indexOfEnd =i;
        endLine ="s";
       // console.log("end element3",indexOfEnd);
    }

    //console.log(startLine,endLine)
}
return {indexOfStart:indexOfStart ,indexOfEnd:indexOfEnd ,startLine:startLine,endLine:endLine};
}

   
    
    


    //function to find where Union Square(u) is 
    function findU(elPos,uPos){
        var u;
        if (elPos<uPos){
            u="after"
            // start from eleement to u
        }
        else{
            u="before"
            // start from u to element 
        }
       return u;
    }  
// main function 
    function mtaLab (a,b){
        var results= findIndex(a,b) 
        var startLine = results.startLine;
        var endLine = results.endLine
        var indexOfStart=results.indexOfStart
        var indexOfEnd=results.indexOfEnd
        var path1,path2,path3;
        if (startLine!=endLine){

            if (startLine=="n") {
                if (findU(indexOfStart,4)=="after"){
                    path1 = pathArray(indexOfStart,4,nLine)
                    console.log(path1,"path to u --n 1")
                }
                else if (findU(indexOfStart,4)=="before"){
                    path1 = pathArray(4,indexOfStart,nLine)
                    console.log(path1,"path from u -- n2")
                }
            }
            else if (endLine=="n") {
                if (findU(4,indexOfEnd)=="after"){
                    path2 = pathArray(indexOfEnd,4,nLine)
                    console.log(path2,"path to u -- n 3")
                }
                else if (findU(4,indexOfEnd)=="before"){
                    path2 = pathArray(4,indexOfEnd,nLine)
                    console.log(path2,indexOfEnd,"path from u --n 4")
                }
            }

            ////the other line T Line

            if (startLine=="l") {
                if (findU(indexOfStart,2)=="after"){
                    path1 = pathArray(indexOfStart,2,lLine)
                    console.log(path1,"path to u --t 1")
                }
                else if (findU(indexOfStart,2)=="before"){
                    path1 = pathArray(2,indexOfStart,lLine)
                    console.log(path1,"path from u -- t 2")
                }
            }
            else if (endLine=="l") {
                if (findU(2,indexOfEnd)=="after"){
                    path2 = pathArray(indexOfEnd,2,lLine)
                    console.log(path2,"path to u -- t 3")
                }
                else if (findU(2,indexOfEnd)=="before"){
                    path2 = pathArray(2,indexOfEnd,lLine)
                    console.log(path2,indexOfEnd,"path from u --t 4")
                }
            }
           

            ////the other line 

            if (startLine=="s") {
                if (findU(indexOfStart,4)=="after"){
                    path1 = pathArray(indexOfStart,4,sLine)
                    console.log(path1,"path to u --s 5")
                }
                else if (findU(indexOfStart,4)=="before"){
                    path1 = pathArray(4,indexOfStart,sLine)
                    console.log(path1,"path from u --  s 6")
                }
            }
            else if (endLine=="s") {
                if (findU(4,indexOfEnd)=="after"){
                    path2 = pathArray(indexOfEnd,4,sLine)
                    console.log(path2,"path to u -- s 7")
                }
                else if (findU(4,indexOfEnd)=="before"){
                    path2 = pathArray(4,indexOfEnd,sLine)
                    console.log(path2,indexOfEnd,"path from u --s 8")
                }
            }

var path = path1+","+path2
           
        }
       
       
       console.log("Your journey continues through the following stops:",path)
      

    }
    
    
    
    mtaLab("3rd-l","Times Square")

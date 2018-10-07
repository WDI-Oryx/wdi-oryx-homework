
var Metrolines = {
    Nline: ["timessaquar" ," N34" , "N28" ," UnoinSaquare" ," N8"],
   Lline: ["L8" , "L6" , "UnoinSaquare ", "L3" ,"L1" ],
   SIXline: ["Groundcenter" , "S33 "," S28" , "S23" ,"UnoinSaquare" ," Astorplace" ]

};

 function TripPathNline( startstation , endstation) {
    var path =Metrolines.Nline;
     if(startstation < endstation){//dissgion any path will take
     console.log('yor trip start in station ' +Metrolines.Nline[startstation]);
      for ( var i=startstation; i<= endstation ; i++){
      console.log(path[i]);
     }} else{
        console.log('yor trip start in station ' +Metrolines.Nline[startstation]);
        for ( var i=startstation; i>= endstation ; i--){
       console.log(path[i]);
     }
 }  
 }
 // the number  sending to function = satiton number ,by using array index
 TripPathNline(4,1);//patt will going backword 
 TripPathNline(1,4);//patt will going forword


 function TripPathLline( startstation , endstation) {
    var path =Metrolines.Lline;
     if(startstation < endstation){
     console.log('yor trip start in station ' +Metrolines.Lline[startstation]);
      for ( var i=startstation; i<= endstation ; i++){
      console.log(path[i]);
     }} else{
        console.log('yor trip start in station ' +Metrolines.Lline[startstation]);
        for ( var i=startstation; i>= endstation ; i--){
       console.log(path[i]);
     }
 }  
 }

 TripPathLline(4,1);


 function TripPathSIXline( startstation , endstation) {
    var path =Metrolines.SIXline;
     if(startstation < endstation){
     console.log('yor trip start in station ' +MetroSIXline.Lline[startstation]);
      for ( var i=startstation; i<= endstation ; i++){
      console.log(path[i]);
     }} else{
        console.log('yor trip start in station ' +Metrolines.SIXline[startstation]);
        for ( var i=startstation; i>= endstation ; i--){
       console.log(path[i]);
     }
 }  
 }

 TripPathSIXline(4,1);
const p = new Promise(function(resove,reject){
    //something takes a long time, then...
    if(true){
        resolve("success")
    }else{
        
    }
});


p.then(function(data){
    console.log("This Worked",data)
});
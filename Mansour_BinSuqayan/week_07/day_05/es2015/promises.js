const p = new Promise(function(resolve, reject) {
    if (Math.random() < 0.5) {
      resolve("success");
    } else {
      reject("THIS IS AN ERROR MESSAGE");
    }
  });
  
  p.then(function(data) {
    console.log("THIS WORKED", data);
  });
  
  p.catch(function(err) {
    console.error("Something went wrong", err);
  });
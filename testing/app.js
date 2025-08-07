const fs = require('fs');

fs.readFile('file.txt','utf-8',(err,data) => {
   if (err) {
    console.log(err);
   }else{
    console.log(data.toUpperCase());
   }
   const upper = data.toUpperCase();

    fs.writeFile('output.txt',upper,(err) => {
     if (err) {
        console.log(err);
     }else{
        console.log("Appended");
     }
    })

})


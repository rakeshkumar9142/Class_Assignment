const fs = require('fs')
 //let sum = 0;
fs.readFile('numbers.txt','utf-8',(err,data) => {
    if (err) {
        console.log(err);
    }else{
        let sum = 0;
        for (let line of data.split(',')) {
            sum += Number(line);
        }
        console.log(sum);
    }
   
})
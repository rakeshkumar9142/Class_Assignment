const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/home') {
        const filepath = path.join(__dirname,'index.html');
        fs.readFile(filepath,'utf-8',(err,Data) => {
           if (err) {
            res.end('Internal Server Error',err)
           }else{
            res.end(Data)
           }
        })
    } else{
        res.end('404 -- Page Not Found')
    }
})

server.listen(PORT,() => {
    console.log(`Server is Runing on PORT : ${PORT}`);
})
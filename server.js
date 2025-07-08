const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url == '/login'){
    fs.readFile(__dirname+'/login.html','utf-8',(err,data) => {
        if (err) {
            res.end('file not found')
        }else{
            res.end(data)
        }
    })
    }
})

server.listen(3000,(err) => {
    if (err) {
        console.log(err);
    }else{
        console.log('Server is runing on port 3000');
    }
})
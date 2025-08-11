const http = require('http');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req,res) => {
  const dataToSend = {
    "message": "Here is your data",
     "status": "success" 
      };
    if (req.url === '/') {
      res.end('This is Home page')
    }else if(req.url === '/about') {
      res.end("This is about page")
    }else if(req.url === '/contact') {
      res.end("This is Contact Page")
    }else if(req.url === '/user/api/') {
      res.end(JSON.stringify(dataToSend));
    }else{
      res.end('404-page-does-not found');
    }
})

server.listen(PORT,(req,res) => {
  console.log(`Server is Runing at PORT : ${PORT}`);
})
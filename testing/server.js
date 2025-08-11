/*
const http = require('http');
const fs = require('fs');
const path = require('path')
const port = 3000;

const server = http.createServer((req,res) => {
  
  if (req.url === '/') {
    const filepath = path.join(__dirname,'index.html')
    const htm = fs.readFile(filepath,'utf-8',(err,data) => {
        res.end(data);
    })
  } else{
    res.end('Page does not found');
  }     

})

server.listen(port,() => {
    console.log(`Server is Listening on PORT : ${port}`);
})

*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req,res) => {

  if (req.url === '/') {
    const filepath = path.join(__dirname,'index.html');
    fs.readFile(filepath,'utf-8',(err,data) => {
      if (err) {
        res.end(err)
      }else{
        res.end(data)
      }
    })
  }else {
    res.end('404-page-does-not-found')
  }

})

server.listen(port,() => {
  console.log(`Server is runing on port : ${port}`);
})
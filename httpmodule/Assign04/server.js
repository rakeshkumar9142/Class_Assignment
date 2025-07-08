const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
  
    const user = {
        "name": "John Doe",
        "age": 30,
        "profession": "Developer"
       }
      
     if(req.url === '/api/user') {
        res.end(JSON.stringify(user))
     }else{
        res.end('404 - Page Not Found');
     }
})

server.listen(PORT,() => {
    console.log(`Server is Runing on PORT : ${PORT}`);
})
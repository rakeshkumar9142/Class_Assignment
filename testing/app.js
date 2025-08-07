const http = require('http');

const server = http.createServer((req,res) => {
   const user = {
      "name": "John Doe",
      "age": 30,
      "profession": "Developer"
     }
     if (req.url === '/api/user') {
       res.end(JSON.stringify(user))
     }else{
      res.end('Page not found')
     }
})

server.listen(3000,() => {
   console.log('Server is ruining on port 3000');
})
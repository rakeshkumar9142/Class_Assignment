const http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
   

    if (req.url === '/') {
      res.end('this is home page');
    }else if(req.url === '/api/user') {
      const dataToSend = {
         "message": "Here is your data",
          "status": "success" 
     };
      res.end(JSON.stringify(dataToSend));
    }else{
      res.end('404 Page Does not found');
    }
    

})

server.listen(port,() => {
   console.log(`Server is Listening at PORT : ${port}`);
})
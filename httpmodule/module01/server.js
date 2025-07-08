const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    res.end('Welcome to My First Node.js Server');
})

server.listen(PORT,() => {
    console.log(`Server is Runing on PORT : ${PORT}`);
})
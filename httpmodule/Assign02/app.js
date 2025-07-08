const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    //res.end('This is my');
    if(req.url === '/') {
        res.end('Home Page');
    }else if(req.url === '/about') {
        res.end('About Us Page');
    }else{
        res.end('404 - Page not found ')
    }
})

server.listen(PORT,() => {
    console.log(`Server is Runing on PORT : ${PORT}`);
})
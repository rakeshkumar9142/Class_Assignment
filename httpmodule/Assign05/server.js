const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) => {

    if (req.url === '/submit' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
            try {
                const parsed = JSON.parse(body); 
                const username = parsed.username;


                res.end(`Received data for user: ${username}`);
            } catch (err) {
                
                res.end('Invalid JSON data');
            }
        });
    } else {
    
        res.end('404 - Page Not Found');
    }
     
}) 

server.listen(PORT,() => {
    console.log(`Server is Runing at PORT : ${PORT}`);
})
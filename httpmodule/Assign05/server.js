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

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Received data for user: ${username}`);
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON data');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
     
}) 

server.listen(PORT,() => {
    console.log(`Server is Runing at PORT : ${PORT}`);
})
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    // Handle POST request to /submit
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        // Collect data chunks
        req.on('data', chunk => {
            body += chunk;
        });

        // When all data is received
        req.on('end', () => {
            try {
                const data = JSON.parse(body); // Parse JSON

                const username = data.username || 'Unknown';
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Received data for user: ${username}`);
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON data');
            }
        });
    } else {
        // For all other routes/methods
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

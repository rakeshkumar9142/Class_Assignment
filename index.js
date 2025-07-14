const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const { add, sub, mul, div } = require("./lab14june/calculate");

const PORT = 3000;

const getHtmlPage = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Arithmetic Operations</title>
        <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
        <h1>Simple Calculator</h1>
        <div class="container">
            <form action="/add" method="get">
                <h2>Addition</h2>
                <input type="text" name="num1" placeholder="First Number" />
                <input type="text" name="num2" placeholder="Second Number" />
                <button type="submit">Add</button>
            </form>
            <form action="/sub" method="get">
                <h2>Subtraction</h2>
                <input type="text" name="num1" placeholder="First Number" />
                <input type="text" name="num2" placeholder="Second Number" />
                <button type="submit">Subtract</button>
            </form>
            <form action="/mul" method="post">
                <h2>Multiplication</h2>
                <input type="text" name="num1" placeholder="First Number" />
                <input type="text" name="num2" placeholder="Second Number" />
                <button type="submit">Multiply</button>
            </form>
            <form action="/div" method="post">
                <h2>Division</h2>
                <input type="text" name="num1" placeholder="First Number" />
                <input type="text" name="num2" placeholder="Second Number" />
                <button type="submit">Divide</button>
            </form>
        </div>
    </body>
    </html>
    `;
};

const handleCalculation = (req, res, operation) => {
    const isPost = req.method === "POST";

    const processInputs = (inputs) => {
        const num1 = parseFloat(inputs.num1);
        const num2 = parseFloat(inputs.num2);

        if (isNaN(num1) || isNaN(num2)) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Error: Invalid input.");
            return;
        }

        try {
            let result;
            switch (operation) {
                case "add": result = add(num1, num2); break;
                case "sub": result = sub(num1, num2); break;
                case "mul": result = mul(num1, num2); break;
                case "div": result = div(num1, num2); break;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Result: ${result}`);
        } catch (e) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end(`Error: ${e.message}`);
        }
    };

    if (isPost) {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const postData = querystring.parse(body);
            processInputs(postData);
        });
    } else {
        const query = url.parse(req.url, true).query;
        processInputs(query);
    }
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    if (pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(getHtmlPage());
    } else if (pathname === "/styles.css") {
        fs.readFile("./public/styles.css", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading CSS");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    } else if (pathname === "/add" && req.method === "GET") {
        handleCalculation(req, res, "add");
    } else if (pathname === "/sub" && req.method === "GET") {
        handleCalculation(req, res, "sub");
    } else if (pathname === "/mul" && req.method === "POST") {
        handleCalculation(req, res, "mul");
    } else if (pathname === "/div" && req.method === "POST") {
        handleCalculation(req, res, "div");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

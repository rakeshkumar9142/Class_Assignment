const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
//const dotenv = require('dotenv').config();

const {add,sub,mul,div} = require('./calculate.js');

//const PORT = process.env.PORT || 3000;
const PORT = 3000;

const getHtmlPage = () => {
    return `
    <!DOCTYPE html>
    <html>
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
}




const server = http.createServer((req,res) => {
     const parsedUrl = url.parse(req.url,true);
     const pathname = parsedUrl.pathname;
     if(pathname === '/'){
        res.end(getHtmlPage());
     }else if (pathname === "/add" && req.method === "GET") {
        console.log(parsedUrl.query);
        let data = add(parsedUrl.query.num1,parsedUrl.query.num2);
        res.end("sum of two number is" + data);
     } 
     else if (pathname === "/sub" && req.method === "GET") {
        console.log(parsedUrl.query);
        let data = sub(parsedUrl.query.num1,parsedUrl.query.num2);
        res.end("sub of two number is" + data);
     }
     else if (pathname === "/mul" && req.method === "POST") {
        console.log(parsedUrl.query);
        let mul = mul(parsedUrl.query.num1,parsedUrl.query.num2);
        res.end("mul of two number is" + mul);
     }
    else if (pathname === "/div" && req.method === "POST") {
    //     handleCalculation(req, res, "div");
    console.log(parsedUrl.query);
        let data = div(parsedUrl.query.num1,parsedUrl.query.num2);
        res.end("sum of two number is" + div);
    } else {
    //     res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("404 Not Found");
     }
})

server.listen(PORT,() => {
    console.log(`Server is Runing on PORT : ${PORT}`);
})
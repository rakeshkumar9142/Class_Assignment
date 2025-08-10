const express = require('express');
const fs = require('fs');
const PORT = 3000;

const app = express();

app.get('/',(req,res) => {
    res.end('this is home page');
})



app.get('/api/data',(req,res) => {
    const user = {
        "message": "Here is your data",
        "status" : "Success"
    }
    res.end(JSON.stringify(user))
})
    
app.use((req,res) => {
    res.status(404).send("Page does not exist")
})

app.listen(PORT,() => {
    console.log(`Server is listening on PORT : ${PORT}`);
})
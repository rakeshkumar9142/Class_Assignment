const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

// Serve static files from public folder
app.use(express.static('public', { index: false }));


// Home route
app.get('/', (req, res) => {
    res.send("This is home page");
});

// About route (serving HTML file)
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'public','contact.html'));
})

// 404 handler
app.use((req, res) => {
    res.status(404).send("This is Wrong URL");
});

app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`);
});

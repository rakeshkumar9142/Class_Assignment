/*

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


*/



/*
const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.use(express.static('public',{index : false}));

app.get('/',(req,res) => {
   res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.use((req,res) => {
    res.end('404-Page-Does-Not-Found');
})

app.listen(PORT,() =>{
   console.log(`Server is Listening on PORT : ${PORT}`);
})

*/

/*

const express = require('express');
const app = express();
const port = 3000;


const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Developer' },
  { id: 3, name: 'Charlie', role: 'User' }
];

app.get('/users/:id', (req, res) => {
  
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);


  if (user) {
  
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Try accessing http://localhost:3000/users/1 or http://localhost:3000/users/2');
});

*/


const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


let products = [];
try {
  const data = fs.readFileSync('products.json', 'utf8');
  products = JSON.parse(data);
} catch (err) {
  console.error("Error reading or parsing products.json:", err);
}


app.get('/products', (req, res) => {
  
  const { category } = req.query; 
  let filteredProducts = products;

 
  if (category) {
  
    filteredProducts = products.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  

  res.status(200).json(filteredProducts);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Try accessing http://localhost:3000/products');
  console.log('Or filter with http://localhost:3000/products?category=electronics');
});
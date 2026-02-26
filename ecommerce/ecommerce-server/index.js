const express = require('express');
const app = express();
const PORT = 3000;

// Enable JSON parsing middleware
app.use(express.json());


// Define a GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

/* 
    endpoints
    GET products
    POST api/products
    PUT api/products/:id
    DELEET api/products/:id

    POST /login
    POST /signup

    GET POST PUT DELETE /carts

    GET POST PUT orders

*/


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
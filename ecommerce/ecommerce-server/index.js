const express = require("express");
const app = express();
const PORT = 3000;
require("./connections/database");

const authRoute = require("./routes/auth");

// Enable JSON parsing middleware
app.use(express.json());
app.use(authRoute);

// cors




/* 
    endpoints
    GET products
    POST api/products
    PUT api/products/:id
    DELEET api/products/:id

    POST /login
    POST /signup
    - database 
    - fields
      - name
      email
      - phone
      - password


    GET POST PUT DELETE /carts

    GET POST PUT orders

*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

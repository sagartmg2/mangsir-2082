const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
require("./connections/database");
require("dotenv").config();

const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

// Enable JSON parsing middleware
app.use(cors());
app.use(express.json());
// app.use(checkAuthentication); // global middleware
app.use(authRoute); // /api/signup , /api/login
app.use(productRoute); // GET|POST/api/products
app.use(cartRoute);
app.use(orderRoute);

app.use("/api/uploads", express.static("uploads"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express"); // common js
// import express from "express" // es module

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.send({
    products: [{ title: "bag" }, { title: "phone" },{ title: "samsung phone" }],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/
// http://localhost:3000/api/products
// https://dummyjson.com/products/search?

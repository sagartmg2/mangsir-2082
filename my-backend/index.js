const express = require("express"); // common js
// import express from "express" // es module
const cors = require("cors");

const app = express();
app.use(cors()); // global middleware
app.use(express.json()); // global middleware

const port = 3000;

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.send({
    products: [{ title: "bag" }, { title: "phone" }, { title: "samsung phone" }],
  });
});

/* 
  C - create
  R  read
  U  update 
  D  delete
*/

let dbTodos = [
  { title: "html", status: true },
  { title: "css", status: true },
  { title: "react", status: true },
  { title: "express", status: false },
];

app.get("/api/todos", (req, res) => {
  res.send(dbTodos);
});

app.post("/api/todos", (req, res) => {
  dbTodos.push({
    title: req.body.title,
    status: false,
  });

  res.send({
    msg: "todos crated",
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/
// http://localhost:3000/api/products
// https://dummyjson.com/products/search?
